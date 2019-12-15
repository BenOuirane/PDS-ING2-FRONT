import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // /!\ Uncomment the first line and comment the second line if you test in localhost /!\
  // /!\ Keep the second line uncommented before you push your code on git /!\

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api/users';

  constructor(private http: HttpClient, private router: Router) { }

  // CreateUser is called with a user parameter
  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/users/create`, user);
  }

  loginUser(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/user/login`, user);
  }

  getResidents(role: string): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/users/`, role);
  }

  // getUsersList is called with no parameter
  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/users`);
  }
}
