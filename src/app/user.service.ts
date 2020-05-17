import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // /!\ Uncomment the first line and comment the second line if you test in localhost /!\
  // /!\ Keep the second line uncommented before you push your code on git /!\

 // private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  // CreateUser is called with a user parameter
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/users/create`, user);
  }

  loginUser(user: Object): Observable<User> { 
 
    return this.http.put<User>(`${this.baseUrl}` + `/user/login`, user);

    //return this.http.put<User>(`${this.baseUrl}` + `/user/login`, JSON.stringify(user) );
  }

  getUsersByRole(role: string): Observable<Array<User>> {
    return this.http.put<Array<User>>(`${this.baseUrl}` + `/users/`, role);
  }

  // getUsersList is called with no parameter
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/users`);
  }

  getUsersById(): Observable<any> {
    /*
    Angular will return what baseUrl
    will send back to it.

    Angular request here is :
    In http, do a get on the Url
    http://{localhost} or {172.31.254.61}:8080/api/users/create
    with no body parameter
     */
    return this.http.get(`http://172.31.254.61:8080/api/` + `/referential_resident2`);
  }
}
