import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { AlarmClock } from './alarm-clock';

@Injectable({
  providedIn: 'root'
})
export class AlarmClockService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAlarmClock(objects: Objects) : Observable<Array<AlarmClock>>{
    return this.http.put<Array<AlarmClock>>(`${this.baseUrl}` + `/alarmClock/list`, objects);
  }
}
