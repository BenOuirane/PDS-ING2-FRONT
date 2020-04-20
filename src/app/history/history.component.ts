import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

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

  startDate = new Date();
  endDate = new Date();

  startDateString : string;
  endDateString : string;

  lampUsingHours = new Array<Map<String[], number>>();
  lampWellUsingHours = new Map<String[], number>();

  constructor(private activatedroute: ActivatedRoute, private lampHistoryService: LampHistoryService, private ovenHistoryService: OvenHistoryService, 
    private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService) { }

  ngOnInit() {
    this.objectId = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.objectType = this.activatedroute.snapshot.paramMap.get("type");
    this.getHistory();
  }

  getHistory() {
    var datePipe = new DatePipe("fr-FR");
    this.startDate = new Date();
    this.endDate = new Date();
    this.endDate.setDate(this.endDate.getDate() - 7);
    this.startDateString = datePipe.transform(this.startDate, 'yyyy-MM-dd hh:mm:ss');
    this.endDateString = datePipe.transform(this.endDate, 'yyyy-MM-dd hh:mm:ss');

    console.log(this.startDateString + " start");
    console.log(this.endDateString + " end");

    switch (this.objectType) {
      case 'lamp':
        this.objectTypeString = "Lampe";
        this.lampHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        this.lampHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
            this.lampUsingHours = data;
            this.lampWellUsingHours = this.lampUsingHours[0];
            console.log(this.lampWellUsingHours.values);
          }
        )
        break;
      case 'oven':
        this.objectTypeString = "Four";
        this.ovenHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); break;

      case 'shutter':
        this.objectTypeString = "Volet";
        this.shutterHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); break;

      case 'alarmClock':
        this.objectTypeString = "Réveil";
        this.alarmClockHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        this.alarmClockHistoryService.getHistoryByColumnAndDate(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
          }
        );
        this.alarmClockHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "radio", this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
          }
        );
        break;

      case 'coffeeMachine':
        this.objectTypeString = "Machine à café" ;
        this.coffeeMachineHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        );
        break;
      default:
        break;
    }
  }

  getKeys(map){
    return Array.from(map.keys());
  }

}
