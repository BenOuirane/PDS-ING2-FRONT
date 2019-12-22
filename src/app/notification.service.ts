import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from "./user";
import { Observable } from 'rxjs';
import { Notification } from "./notification";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  createNotification(notification: Notification){
    return this.http.put(`${this.baseUrl}` + `/notification/create`, notification);
  }

  getNotifications(user: User): Observable<Array<Notification>>{
    return this.http.put<Array<Notification>>(`${this.baseUrl}` + `/notifications/list`, user);
  }

  updateNotificationState(user: User): Observable<Array<Notification>> {
    return this.http.put<Array<Notification>>(`${this.baseUrl}` + `/notifications/update`, user);
  }
}
