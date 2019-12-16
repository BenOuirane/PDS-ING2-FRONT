import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  createNotification(notification: Object){
    return this.http.put(`${this.baseUrl}` + `/notification/create`, notification);
  }

  getNotification(userId: number){
    return this.http.put(`${this.baseUrl}` + `/notifications/list`, userId);
  }

  updateNotificationState(userId: number){
    return this.http.put(`${this.baseUrl}` + `/notifications/update`, userId);
  }
}
