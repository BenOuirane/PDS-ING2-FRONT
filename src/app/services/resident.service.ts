import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from "../user";
import { Resident } from '../resident';
import { Observable } from 'rxjs';
import { Room } from "../room";

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';
  
  constructor(private http: HttpClient, private router: Router) { }

  getResident(user: User): Observable<Resident>{
    return this.http.put<Resident>(`${this.baseUrl}` + `/resident/singleton`, user);
  }

}
