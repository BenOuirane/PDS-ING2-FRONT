import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from "../notification";
import { AppComponent } from '../app.component'
import { timer } from 'rxjs';
import { User } from "../user";

@Component({
  selector: 'app-get-notifications',
  templateUrl: './get-notifications.component.html',
  styleUrls: ['./get-notifications.component.scss']
})
export class GetNotificationsComponent implements OnInit {

  notifications: Notification[];
  user: User = new User();

  constructor(private notificationService: NotificationService, private appComponent: AppComponent) { }

  ngOnInit() {
    timer(3, 2000).subscribe(x => {
      this.notifications = this.appComponent.newNotifications;
    });

    this.user = JSON.parse(localStorage.getItem('user'));

    this.notificationService.updateNotificationState(this.user.id).subscribe(
      error => {
        console.log(error);
      })
  }

}
