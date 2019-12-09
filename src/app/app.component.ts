import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./user";
import { timer } from 'rxjs';
import { Notification } from "./notification"
import { NotificationService } from "./notification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

/*
Here, we give some attributes to the html page
(app.component.html),
we can call them with {xxx} on the html code
 */

export class AppComponent {

  user: User = new User();
  numberNotification: number;
  newNotifications: Notification[];
  notificationsString: string;

  constructor(private router: Router, private notificationService: NotificationService) {
    this.numberNotification = 0;
  }

  request() {
    this.notificationService.getNotification(this.user.id).subscribe(
      data => {
        this.numberNotification = 0;
        this.notificationsString = JSON.stringify(data);
        this.newNotifications = JSON.parse(this.notificationsString);
        console.log(data)
        this.newNotifications.forEach(notification => {
          console.log(notification.state);
          if(notification.state == "PENDING") {
            this.numberNotification = this.numberNotification + 1;
          }
        });
        console.log(this.numberNotification);
      },
      error => {
        console.log(error); 
      }
    );
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    
    timer(0, 2000).subscribe(() => {
      this.request();
    });

  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  
  authenticated() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return localStorage.getItem('user');
  }
}
