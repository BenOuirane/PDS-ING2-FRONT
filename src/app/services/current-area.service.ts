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

  private baseUrl = 'http://localhost:8080/api';
 // private baseUrl = 'http://172.31.254.61:8080/api';
  
  constructor(private http: HttpClient, private router: Router) { }

  getCurrentArea(currentarea: CurrentArea): Observable<CurrentArea>{
    return this.http.put<CurrentArea>(`${this.baseUrl}` + `/currentArea/singleton`, currentarea);
  }

  getSumCurrentArea(id: number): Observable<Bracelet>{
       return this.http.get<Bracelet>(`${this.baseUrl}` + `/currentlocation/sum/`+ id);
  }

  getAllCurrentArea(){
    return this.http.get<CurrentArea[]>(`${this.baseUrl}` + `/currentlocations/`);
  }

}
