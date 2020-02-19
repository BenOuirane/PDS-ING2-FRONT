import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { History } from '../historyService/history';
import { LampHistoryService } from '../historyService/lamp-history.service';
import { ShutterHistoryService } from '../historyService/shutter-history.service';
import { OvenHistoryService } from '../historyService/oven-history.service';
import { AlarmClockHistoryService } from '../historyService/alarm-clock-history.service';
import { CoffeeMachineHistoryService } from '../historyService/coffee-machine-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  id: number;
  objectType: string;
  histories: History[] = new Array<History>();

  constructor(private activatedroute : ActivatedRoute, private lampHistoryService: LampHistoryService, private ovenHistoryService: OvenHistoryService, private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService) { }

  ngOnInit() {
    this.id = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.objectType = this.activatedroute.snapshot.paramMap.get("type");
    this.getHistory();
  }

  getHistory() {
    switch (this.objectType) {
      case 'lamp':
        this.lampHistoryService.getLampHistory(this.id).subscribe(
          data => {
            this.histories = data;
            console.log(data);
          }
        ); break;
      case 'oven':
        this.ovenHistoryService.getOvenHistory(this.id).subscribe(
          data => {
            this.histories = data;
            console.log(data);
          }
        ); break;

      case 'shutter':
        this.shutterHistoryService.getShutterHistory(this.id).subscribe(
          data => {
            this.histories = data;
            console.log(data);
          }
        ); break;

      case 'alarmClock':
        this.alarmClockHistoryService.getAlarmClockHistory(this.id).subscribe(
          data => {
            this.histories = data;
            console.log(data);
          }
        ); break;

      case 'coffeeMachine':
        this.coffeeMachineHistoryService.getCoffeeMachineHistory(this.id).subscribe(
          data => {
            this.histories = data;
            console.log(data);
          }
        ); 
        break;
      default:
        break;
  }
  }

}
