import { Injectable } from '@angular/core';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

   //private baseUrl = 'http://localhost:8080/api';
   private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getObject(room : Room){
    return this.http.put(`${this.baseUrl}` + `/object/list`, room);
  }
}
