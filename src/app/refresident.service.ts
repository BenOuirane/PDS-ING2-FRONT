import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class refresidentService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient, private router: Router) { }

  getUsersById(id: string): Observable<any> {
    let httpParams = new HttpParams();
    httpParams.set('id', id);
      let httpOption = {
        params: httpParams,
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
      
    /*
    Angular will return what baseUrl
    will send back to it.

    Angular request here is :
    In http, do a get on the Url
    http://{localhost} or {172.31.254.61}:8080/api/users/create
    with no body parameter
     */
    return this.http.get<any>(this.baseUrl + `/referential_resident2/`+id, httpOption);
  }
  
  createPositionData(): Observable<any>{
    let header = new HttpHeaders({'Content-Type': 'application/json'})
    let httpOption = {
        headers: header
      };
    console.log('service create position');
    return this.http.post(this.baseUrl+ '/generate_referential_position', null, httpOption);
    }

    updatePositionData(): Observable<any>{
      let header = new HttpHeaders({'Content-Type': 'application/json'})
      let httpOption = {
          headers: header
        };
      console.log('service update position');
      return this.http.post(this.baseUrl+ '/update_referential_position', null, httpOption);
      }
}
