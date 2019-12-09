import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Notification } from "../notification";
import { User } from '../user';
import { NotificationService } from '../notification.service';
import { UserService } from "../user.service";

declare var $: any;

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  notificationForm: FormGroup;
  notification: Notification;
  user: User = new User();
  response: string;
  residents: User[];
  residentsString: string;
  message: string;
  notificationType: string;

  constructor(private notificationService: NotificationService, private userService: UserService) {
    this.notificationForm = this.createFormGroup();
    this.notification = new Notification();
    this.response = null;
  }

  ngOnInit() {
    this.limitTime();

    this.userService.getResidents("RESIDENT").subscribe(
      data => {
        this.residentsString = JSON.stringify(data);
        this.residents = JSON.parse(this.residentsString);

        this.residents.forEach(option =>
          $("#select_receiver").add(
            $('#select_receiver').append('<option value="' + option.id + '">' + option.firstname + ' ' + option.lastname + '</option>')
          )
        )
      },
      error => {
        console.log(error),
        this.response = "Un problème pour récupérer les résidents est survenu, veuillez réessayer plus tard."
      });
  }

  onSubmit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.notification.message = this.getMessage();
    this.notification.receiver = $("#select_receiver").val();
    this.notification.title = $("#title").val();
    this.notification.sender = this.user.id;
    this.notification.type = this.notificationType;
    
    this.notificationService.createNotification(this.notification).subscribe(
      data => {
        this.response = "La notification va être envoyée sous peu. Merci à vous."
        $("#title").val("");
        $("#message").val("");
        $("#select_receiver").val("");
      },
      error => {
        console.log(error),
        this.response = "Un problème est survenu, veuillez réessayer plus tard."
      });
  }

  createFormGroup() {
    return new FormGroup({
      receiverId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  getMessage() {
    if ($("#notification_type").val() == "medicine_notification"){
      this.notificationType = "MEDICINE"
      this.message = $("#message").val() + "<br>Pour le médicament : " + $("#medicine").val() + "<br>A : " + $("#time_notification").val();
    } else if ($("#notification_type").val() == "object_notification"){
      this.notificationType = "OBJECT"
      this.message = $("#message").val() + "<br>Pour l'objet : " + $("#object").val();
    } else {
      this.notificationType = "TEXT"
      this.message = $("#message").val();
    }
    return this.message;
  }

  notificationTypeChange() {
    $('#notification_full_type').val("empty");

    $(".custom_field").css("display", "none");

    if ($("#notification_type").val() == "medicine_notification") {
      $("#medicine_field").css("display", "block");
      $("#text_notification").find('h4').html("Rappel de médicament");
      this.fieldsContent(["Rappel de médicament", "N'oubliez pas de prendre votre médicament"])

    } else if ($("#notification_type").val() == "object_notification") {
      $("#object_field").css("display", "block");
      $("#text_notification").find('h4').html("Notification liée à un objet");
      this.fieldsContent(["Notification liée à un objet", "Faites attention à cet objet"])

    } else {
      $("#text_notification").find('h4').html("Notification textuelle");
      this.fieldsContent(["", ""])
    }
  }

  notificationFullTypeChange() {
    $('#notification_type').val("empty");

    $(".custom_field").css("display", "none");

    if ($('#notification_full_type').val() == "empty") {
      $("#text_notification").find('h4').html("Notification textuelle");

      this.fieldsContent(["", ""])

    } else {
      $("#text_notification").find('h4').html("Notification pré-remplie : " + $('#notification_full_type').find(":selected").text());

      if ($('#notification_full_type').val() == "hello") {
        this.fieldsContent(["Bonjour à vous", "Bonne journée à vous"])

      } else if ($('#notification_full_type').val() == "hot") {
        this.fieldsContent(["Attention canicule", "Buvez régulièrement de l'eau"])

      } else {
        this.fieldsContent(["Attention épidémie", "N'oubliez pas de vous laver régulièrement les mains"])
      }
    }
  }

  fieldsContent(notificationFields : string[]){
    $("#title").val(notificationFields[0]);
    $("#message").val(notificationFields[1]);
  }

  limitTime() {
    var today = new Date();
    var now = today.getHours() + ":" + today.getMinutes();
    $("#time_notification").attr("min", now);
  }

}
