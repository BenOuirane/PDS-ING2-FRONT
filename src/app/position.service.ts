import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class positionService {
    private baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient, private router: Router) { }


  
  createPositionData(): Observable<any>{
    let header = new HttpHeaders({'Content-Type': 'application/json'})
    let httpOption = {
        headers: header
      };
    console.log('service create position');
    return this.http.post(this.baseUrl+ '/generate_positions', null, httpOption);
    }

 
}
