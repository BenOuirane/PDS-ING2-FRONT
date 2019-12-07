import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  createNotification(notification: Object){
    /*
    Angular will return what baseUrl
    will send back to it.

    Angular request here is :
    In http, do a post on the Url
    http://{localhost} or {172.31.254.61}:8080/api/users/create
    with the body parameter user
     */
    return this.http.put(`${this.baseUrl}` + `/notification/create`, notification);
  }
}
