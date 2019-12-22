import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects'; 

@Injectable({
  providedIn: 'root'
})
export class LampeService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getlampe(objects: Objects){
    return this.http.put(`${this.baseUrl}` + `/lamp/list`, objects);
  }

}
