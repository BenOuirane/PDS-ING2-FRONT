import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from "../notification";
import { User } from '../user';
import { AppComponent } from '../app.component'
import { timer } from 'rxjs';

@Component({
  selector: 'app-get-notifications',
  templateUrl: './get-notifications.component.html',
  styleUrls: ['./get-notifications.component.scss']
})
export class GetNotificationsComponent implements OnInit {

  notifications: Notification[];
  
  constructor(private appComponent : AppComponent) {}

  ngOnInit() {
    timer(3, 2000).subscribe(x => {
      this.notifications = this.appComponent.newNotifications;
    });
  }

}
