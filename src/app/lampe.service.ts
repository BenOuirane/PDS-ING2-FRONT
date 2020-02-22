import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { Lampe } from './lampe';

@Injectable({
  providedIn: 'root'
})
export class LampeService {

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getlampe(objects: Objects): Observable<Array<Lampe>> {
    return this.http.put<Array<Lampe>>(`${this.baseUrl}` + `/lamp/list`, objects);
  }

  updateLamp(lampe: Lampe): Observable<boolean> {
    console.log("updateLampe is call"); 
    return this.http.put<boolean>(`${this.baseUrl}` + `/lamp/updateParam`, lampe);
    
  }
 
}
