import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Notification } from "../notification";
import { User } from '../user';
import { NotificationService } from '../notification.service';
declare var $: any;

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  notification : Notification;
  notificationForm : FormGroup;
  user : User = new User();
  response : string;

  constructor(private notificationService: NotificationService) {
    this.notificationForm = this.createFormGroup();
    this.notification = new Notification();
   }

  toggleFields(notificationType) {
    $(".custom_field").css("display", "none");

    if (notificationType == "medicine_notification") {
      $("#medicine_field").css("display", "block");
      $("#text_notification").find('h4').html("Rappel de médicament");
      $("#title").val("Rappel de médicament");
      $("#message").val("N'oubliez pas de prendre votre médicament :)");
    } else if (notificationType == "object_notification") {
      $("#object_field").css("display", "block");
      $("#text_notification").find('h4').html("Notification liée à un objet");
      $("#title").val("Notification liée à un objet");
      $("#message").val("Faites attention à votre objet :)");
    } else {
      $("#text_notification").find('h4').html("Notification textuelle");
      $("#title").val("");
      $("#message").val("");
    }

  }

  notificationTypeChange() {
    $('#notification_full_type').val("empty");
    this.toggleFields($("#notification_type").val());
  }

  notificationFullTypeChange() {
    $('#notification_type').val("empty");
    this.toggleFields("text_notification");

    if ($('#notification_full_type').val() == "empty") {
      $("#text_notification").find('h4').html("Notification textuelle");
      $("#title").val("");
      $("#message").val("");
    } else {
      $("#text_notification").find('h4').html("Notification pré-remplie : " + $('#notification_full_type').find(":selected").text());
      if ($('#notification_full_type').val() == "hello") {
        $("#title").val("Bonjour à vous");
        $("#message").val("Bonne journée à vous :)");
      } else if ($('#notification_full_type').val() == "hot") {
        $("#title").val("Attention canicule");
        $("#message").val("Buvez régulièrement de l'eau");
      } else {
        $("#title").val("Attention épidémie");
        $("#message").val("N'oubliez pas de vous laver régulièrement les mains");
      }
    }
  }

  ngOnInit() {
    this.response = null;
  }

  onSubmit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    console.log($("#message").val());
    console.log($("#select_receiver").val());
    console.log($("#title").val());
    console.log(this.user.id);

    this.notification.message = $("#message").val();
    this.notification.receiver = $("#select_receiver").val();
    this.notification.title = $("#title").val();
    this.notification.sender = this.user.id;

    this.notificationService.createNotification(this.notification).subscribe(
      data => {
        console.log(data),
        this.response = "La notification va être envoyer sous peu. Merci à vous."
        $("#title").val("");
        $("#message").val("");
        $("#select_receiver").val("");
      }, 
      error => {
        console.log(error),
        this.response = "Un problème est survenu, veuillez rééssayer plus tard."
      });
  }

  createFormGroup() {
    return new FormGroup({
      receiverId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  } 

}
