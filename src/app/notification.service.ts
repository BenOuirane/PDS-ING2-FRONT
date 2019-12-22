import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  createNotification(notification: Object){
    return this.http.put(`${this.baseUrl}` + `/notification/create`, notification);
  }

  getNotification(user: User){
    return this.http.put(`${this.baseUrl}` + `/notifications/list`, user);
  }

  updateNotificationState(user: User){
    return this.http.put(`${this.baseUrl}` + `/notifications/update`, user);
  }
}
