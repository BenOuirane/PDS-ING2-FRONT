import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Area } from '../layouts/models/area';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) {
  }

  getAreas(area: Area): Observable<Array<Area>>{
    return this.http.put<Array<Area>>(`${this.baseUrl}` + `/area/list`, area);
  }


}
