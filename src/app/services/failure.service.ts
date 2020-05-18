import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Failure } from '../Failure';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FailureService {

  constructor(private http: HttpClient, private router: Router) { }

 private baseUrl = 'http://localhost:8080/api';
 ////private baseUrl = 'http://172.31.254.61:8080/api';

  getFailures(): Observable<Array<Failure>> {
    return this.http.get<Array<Failure>>(`${this.baseUrl}/failures`);
  }

  launchSimulation(): Observable<Array<Failure>>{
    return this.http.get<Array<Failure>>(`${this.baseUrl}/failures/simulation`);
  }
}
