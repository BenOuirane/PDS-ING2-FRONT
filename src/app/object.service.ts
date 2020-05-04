import { Injectable } from '@angular/core';
import { Room } from './room';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Objects } from './objects';
import { Observable } from 'rxjs';
import { Shutter } from './shutter';
import { CoffeeMachine } from './coffeeMachine';
import { Lampe } from './lampe';
import { AlarmClock } from './alarm-clock';
import { ScenarioMyMorning } from './scenarioMyMorning';
import { LampHistoryService } from './historyService/lamp-history.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  //private baseUrl = 'http://localhost:8080/api';
  private baseUrl = 'http://172.31.254.61:8080/api';

  constructor(private http: HttpClient, private router: Router) { }

  getObject(room: Room): Observable<Array<Objects>> {
    return this.http.put<Array<Objects>>(`${this.baseUrl}/object/list`, room);
  }

  scenarioMyMorning(scenarioMyMorning : ScenarioMyMorning) : Observable<ScenarioMyMorning> {
    console.log("scenarioMyMorning", scenarioMyMorning);
    
    return this.http.put<ScenarioMyMorning>(`${this.baseUrl}/objects/Scenario/myMorning`, scenarioMyMorning)
  }
 /* scenarioMyMorning(lamp: Lampe, shutter: Shutter, alarmClock: AlarmClock, coffeeMachine: CoffeeMachine){
    return this.http.put<Lampe, Shutter, >
  }*/

}
