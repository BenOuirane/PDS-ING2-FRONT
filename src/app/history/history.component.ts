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

  objectId: number;
  objectType: string;
  objectTypeString: string;
  histories: History[] = new Array<History>();

  constructor(private activatedroute: ActivatedRoute, private lampHistoryService: LampHistoryService, private ovenHistoryService: OvenHistoryService, private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService) { }

  ngOnInit() {
    this.objectId = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.objectType = this.activatedroute.snapshot.paramMap.get("type");
    this.getHistory();
  }

  getHistory() {
    switch (this.objectType) {
      case 'lamp':
        this.objectTypeString = "Lampe";
        this.lampHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
          }
        ); break;
      case 'oven':
        this.objectTypeString = "Four";
        this.ovenHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
          }
        ); break;

      case 'shutter':
        this.objectTypeString = "Volet";
        this.shutterHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
          }
        ); break;

      case 'alarmClock':
        this.objectTypeString = "Réveil";
        this.alarmClockHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
          }
        ); break;

      case 'coffeeMachine':
        this.objectTypeString = "Machine à café" ;
        this.coffeeMachineHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
          }
        );
        break;
      default:
        break;
    }
  }

}
