import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*
  baseUrl :
  The Url where the Angular App will go when some of it's functions
  will be fired
  See examples below
   */
  // /!\ Uncomment the first line and comment the second line if you test in localhost /!\
  // /!\ Keep the second line uncommented before you push your code on git /!\

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  // CreateUser is called with a user parameter
  createUser(user: Object): Observable<Object> {
    /*
    Angular will return what baseUrl
    will send back to it.

    Angular request here is :
    In http, do a post on the Url
    http://{localhost} or {172.31.254.61}:8080/api/users/create
    with the body parameter user
     */
    return this.http.post(`${this.baseUrl}` + `/users/create`, user);
  }

  loginUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/user/login`, user);
  }

  getResidents(role: string) {
    return this.http.put(`${this.baseUrl}` + `/users/`, role);
  }

  // getUsersList is called with no parameter
  getUsersList(): Observable<any> {
    /*
    Angular will return what baseUrl
    will send back to it.

    Angular request here is :
    In http, do a get on the Url
    http://{localhost} or {172.31.254.61}:8080/api/users/create
    with no body parameter
     */
    return this.http.get(`${this.baseUrl}` + `/users`);
  }
}
