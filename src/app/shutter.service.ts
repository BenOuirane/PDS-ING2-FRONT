import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { Shutter } from './shutter';

@Injectable({
  providedIn: 'root'
})
export class ShutterService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getshutter(objects: Objects) : Observable<Array<Shutter>>{
    return this.http.put<Array<Shutter>>(`${this.baseUrl}` + `/shutter/list`, objects);
  }

  updateShutter(shutter: Shutter): Observable<boolean> {
    console.log("updateShutter is call"); 
    return this.http.put<boolean>(`${this.baseUrl}` + `/shutter/updateParam`, shutter);
    
  }
}
