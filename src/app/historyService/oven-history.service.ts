import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { History } from '../historyService/history';

@Injectable({
  providedIn: 'root'
})
export class OvenHistoryService {

  private baseUrl = 'http://localhost:8080/api';
  //private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHistory(id: Number) : Observable<Array<History>>{
    return this.http.put<Array<History>>(`${this.baseUrl}` + `/history/oven`, id);
  }
}
