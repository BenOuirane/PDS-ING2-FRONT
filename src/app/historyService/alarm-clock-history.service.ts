import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { History } from '../historyService/history';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockHistoryService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getHistory(id: Number) : Observable<Array<History>>{
    return this.http.put<Array<History>>(`${this.baseUrl}` + `/history/alarmClock`, id);
  }

  getHistoryByColumnAndDate(id: Number, start : string, end : string) : Observable<Array<History>>{
    return this.http.put<Array<History>>(`${this.baseUrl}` + `/alarm/alarmClock`, {'id': id, 'start': start, 'end' : end });
  }

  getHistoryFavoriteParameterByDate(id: Number, parameter : string, start : string, end : string) : Observable<string>{
    return this.http.put<string>(`${this.baseUrl}` + `/favorite/alarmClock`, {'id': id, 'start': start, 'parameter' : parameter, 'end' : end });
  }
}
