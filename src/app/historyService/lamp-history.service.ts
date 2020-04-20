import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { History } from '../historyService/history';

@Injectable({
  providedIn: 'root'
})
export class LampHistoryService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHistory(id: Number) : Observable<Array<History>>{
    return this.http.put<Array<History>>(`${this.baseUrl}` + `/history/lamp`, id);
  }

  getHistoryUsingHoursByDate(id: Number, start : string, end : string) : Observable<Array<Map<String[], number>>>{
    return this.http.put<Array<Map<String[], number>>>(`${this.baseUrl}` + `/hours/lamp`, {'id': id, 'start': start, 'end' : end });
  }
}
