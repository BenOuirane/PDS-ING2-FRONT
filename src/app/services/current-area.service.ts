import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from "../user";
import { Resident } from '../resident';
import { Observable } from 'rxjs';
import { CurrentArea } from '../layouts/models/current-area';
import { Bracelet } from '../layouts/models/bracelet';


@Injectable({
  providedIn: 'root'
})
export class CurrentAreaService {

  private baseUrl1 = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';
  
  constructor(private http: HttpClient, private router: Router) { }

  getCurrentArea(currentarea: CurrentArea): Observable<CurrentArea>{
    return this.http.put<CurrentArea>(`${this.baseUrl}` + `/currentArea/singleton`, currentarea);
  }

  getSumCurrentArea(id: number): Observable<Bracelet>{
    console.log("HEllo "+id)
    //error id not working
    return this.http.get<Bracelet>(`${this.baseUrl1}` + `/currentlocation/sum/`+ id);
  }


}
