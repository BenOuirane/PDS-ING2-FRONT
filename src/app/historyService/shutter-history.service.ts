import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { History } from '../historyService/history';

@Injectable({
  providedIn: 'root'
})
export class ShutterHistoryService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHistory(id: Number) : Observable<Array<History>>{
    return this.http.put<Array<History>>(`${this.baseUrl}` + `/history/shutter`, id);
  }

  getWronglyOpened(id: Number, start : string, end : string): Observable<Map<Array<String>, number>> {
    return this.http.put<Map<Array<String>, number>>(`${this.baseUrl}` + `/wronglyOpened/shutter`, {'id': id, 'start': start, 'end' : end });
  }
}
