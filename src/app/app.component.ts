import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { User } from "./user";
import { Notification } from "./notification"
import { NotificationService } from "./notification.service";


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  user: User = new User();
  numberNotification: number;
  newNotifications: Notification[];

  constructor(private router: Router, private notificationService: NotificationService) {
    this.numberNotification = 0;
  }

  ngOnInit() {
    this.toggleHeaderStyle();


    if(!window.location.href.includes('login')) {

      this.user = JSON.parse(localStorage.getItem('user'));
      if(this.user.role == 'RESIDENT'){
        timer(0, 10000).subscribe(() => {
          this.numberNotification = 0;
          this.notificationService.getNotifications(this.user).subscribe(

            data => {
              this.newNotifications = data;
              this.newNotifications.forEach(notification => {
                if (notification.state == "PENDING") {
                  this.numberNotification = this.numberNotification + 1;
                }
              });
            },
            error => {
              console.log(error);
            }
          );
        });

      }
    }

  }

  toggleHeaderStyle() {
    if ($(window).scrollTop() > 64) {
        $('#navbarBox').css("height", "80px");
    } else {
        $('#navbarBox').css("height", "100px");
    }

    if ($(window).width() < 768) {
        if(!$('.navbar-collapse').hasClass("collapsed-menu")) {
            $('.navbar-collapse').addClass("collapsed-menu");
        }
    } else {
        if($('.navbar-collapse').hasClass("collapsed-menu")) {
            $('.navbar-collapse').removeClass("collapsed-menu");
        }
    }
  }

  showMenu() {
    $('#navbar').toggleClass("show");
  }

  logout() {
    localStorage.removeItem('user');
    window.location.href = "/login";
  }

  authenticated() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return localStorage.getItem('user');
  }

  
}

