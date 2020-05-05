import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { Oven } from './oven';

@Injectable({
  providedIn: 'root'
})
export class OvenService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getOven(objects: Objects) : Observable<Array<Oven>>{
    return this.http.put<Array<Oven>>(`${this.baseUrl}` + `/oven/list`, objects);
  }

  updateOven(oven: Oven): Observable<boolean> {
    console.log("updateOven is call"); 
    return this.http.put<boolean>(`${this.baseUrl}` + `/oven/updateParam`, oven);
    
  }
}
