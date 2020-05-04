import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class ObjectsHistoryService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHistoryUsingHoursByDate(id: Number, parameter : string,  start : string, end : string, objType : string) : Observable<Array<Map<Array<String>, number>>>{
    return this.http.put<Array<Map<Array<String>, number>>>(`${this.baseUrl}` + `/hours/` + objType, {'id': id, 'start': start,  'parameter' : parameter, 'end' : end });
  }

  getHistoryFavoriteParameterByDate(id: Number, parameter : string, start : string, end : string, objType: string) : Observable<string>{
    return this.http.put<string>(`${this.baseUrl}` + `/favorite/` + objType, {'id': id, 'start': start, 'parameter' : parameter, 'end' : end });
  }
}
