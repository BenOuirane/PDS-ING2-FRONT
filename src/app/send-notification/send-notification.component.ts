import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-send-notification',
  templateUrl: './send-notification.component.html',
  styleUrls: ['./send-notification.component.scss']
})
export class SendNotificationComponent implements OnInit {

  constructor() { }

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
    
  }

}
