import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Room } from './room';
import { Observable } from 'rxjs';
import { Resident } from './resident';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getResidentByRoom(room : Room) : Observable<Resident>{
    return this.http.put<Resident>(`${this.baseUrl}` + `/resident`, room);
  }

  getResidentById(id : Number) : Observable<User>{
    return this.http.put<User>(`${this.baseUrl}` + `/resident/id`, id);
  }
}
