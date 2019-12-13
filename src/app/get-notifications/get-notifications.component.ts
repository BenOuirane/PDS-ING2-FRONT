import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AppComponent } from '../app.component'

import { User } from "../user";
import { Notification } from "../notification";

import { NotificationService } from '../notification.service';

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
    this.user = JSON.parse(localStorage.getItem('user')); 

    timer(2, 2000).subscribe(x => {
      this.notifications = this.appComponent.newNotifications;
      
    setTimeout(() => {  
        this.notificationService.updateNotificationState(this.user.id).subscribe(
          error => {
            console.log(error);
          })
       }, 5000);
    });

    
  }

  split(string, nb) {
    var array = string.split(',');
    return array[nb];
  }

}
