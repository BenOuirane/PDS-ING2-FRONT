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
  lampPowered = new Map<String[], number>();
  lampPoweredTooLong = new Map<String[], number>();

  constructor(private activatedroute: ActivatedRoute, private lampHistoryService: LampHistoryService, private ovenHistoryService: OvenHistoryService, 
    private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService) { }

  ngOnInit() {
    this.objectId = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.objectType = this.activatedroute.snapshot.paramMap.get("type");
    this.getHistory();
  }

  getHistory() {
    var datePipe = new DatePipe("fr-FR");

    // Testing with the date of 7 days ago
    this.endDate.setDate(this.endDate.getDate() - 7);

    // Creating date strings
    this.startDateString = datePipe.transform(this.startDate, 'yyyy-MM-dd hh:mm:ss');
    this.endDateString = datePipe.transform(this.endDate, 'yyyy-MM-dd hh:mm:ss');

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
            this.lampUsingHours = data;
            this.lampPowered = this.lampUsingHours[0];
            this.lampPoweredTooLong = this.lampUsingHours[1];
          }
        );
        // TODO : getting favorite intensity /"intensity" and favorite color /"color"
        break;
      case 'oven':
        this.objectTypeString = "Four";
        this.ovenHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        // TODO : getting favorite mode /"mode" and if temperature too high
        break;

      case 'shutter':
        this.objectTypeString = "Volet";
        this.shutterHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        // TODO : getting if open during many days or open during the night
        break;

      case 'alarmClock':
        this.objectTypeString = "Réveil";
        this.alarmClockHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        this.alarmClockHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "radio", this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
          }
        );
        // TODO : getting favorite time to wake up /"alarm"
        break;

      case 'coffeeMachine':
        this.objectTypeString = "Machine à café" ;
        this.coffeeMachineHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        );
        // TODO : getting number of capsules bought /"capsules" and time powered on /"power"
        break;
      default:
        break;
    }
  }
}
