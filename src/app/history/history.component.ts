import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { KeyValuePipe } from '@angular/common';
declare var $: any;

import { History } from '../historyService/history';
import { ShutterHistoryService } from '../historyService/shutter-history.service';
import { OvenHistoryService } from '../historyService/oven-history.service';
import { AlarmClockHistoryService } from '../historyService/alarm-clock-history.service';
import { CoffeeMachineHistoryService } from '../historyService/coffee-machine-history.service';
import { ObjectsHistoryService } from '../historyService/objects-history.service';

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
  favoriteColor = new String();
  favoriteIntensity = new String();

  coffeeMachineUsingHours = new Array<Map<String[], number>>();
  coffeeMachinePowered = new Map<String[], number>();
  coffeeMachinePoweredTooLong = new Map<String[], number>();
  capsules = new Number;

  ovenUsingHours = new Array<Map<String[], number>>();
  ovenPowered = new Map<String[], number>();
  ovenPoweredTooLong = new Map<String[], number>();
  ovenTooHigh = new Array<History>();
  favoriteMode = new String;

  constructor(private activatedroute: ActivatedRoute, private objectsHistoryService : ObjectsHistoryService, private ovenHistoryService: OvenHistoryService, 
    private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService) { }

  ngOnInit() {
    this.objectId = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.objectType = this.activatedroute.snapshot.paramMap.get("type");
    this.getHistory();
  }

  // Prendre en charge la date, 'il y a une semaine, il y a un mois"
  getDate(){
  
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
        // Get history by date
        this.objectsHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString, "lamp").subscribe(
          data => {
            this.lampUsingHours = data;
            this.lampPowered = this.lampUsingHours[0];
            this.lampPoweredTooLong = this.lampUsingHours[1];
          }
        );
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "intensity", this.startDateString, this.endDateString, "lamp").subscribe(
          data => {
            this.favoriteIntensity = data;
          }
        );
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "color", this.startDateString, this.endDateString, "lamp").subscribe(
          data => {
            this.favoriteColor = data;
          }
        );
        break;
      case 'oven':
        this.objectTypeString = "Four";
        // Get history by date
        this.ovenHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "mode", this.startDateString, this.endDateString, "oven").subscribe(
          data => {
            this.favoriteMode = data;
          }
        );
        this.objectsHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString, "oven").subscribe(
          data => {
            this.ovenUsingHours = data;
            this.ovenPowered = this.ovenUsingHours[0];
            this.ovenPoweredTooLong = this.ovenUsingHours[1];
          }
        );
        // temperature asked on ihm
        this.ovenHistoryService.getTemperatureTooHigh(this.objectId, this.startDateString, this.endDateString, 600).subscribe(
          data => {
            this.ovenTooHigh = data;
          }
        );
        break;

      case 'shutter':
        this.objectTypeString = "Volet";
        // Get history by date
        this.shutterHistoryService.getHistory(this.objectId).subscribe(
          data => {
            this.histories = data;
            this.histories.reverse();
          }
        ); 

        this.shutterHistoryService.getWronglyOpened(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
          }
        );
        
        break;

      case 'alarmClock':
        this.objectTypeString = "Réveil";
        // Get history by date
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "radio", this.startDateString, this.endDateString, "alarmClock").subscribe(
          data => {
            console.log(data);
          }
        );
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "alarm", this.startDateString, this.endDateString, "alarmClock").subscribe(
          data => {
            console.log(data);
          }
        );
        this.alarmClockHistoryService.getAlarmDuringNight(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            console.log(data);
          }
        );
        break;

      case 'coffeeMachine':
        this.objectTypeString = "Machine à café" ;
        // Get history by date
        this.objectsHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString, "coffeeMachine").subscribe(
          data => {
            this.coffeeMachineUsingHours = data;
            this.coffeeMachinePowered = this.coffeeMachineUsingHours[0];
            this.coffeeMachinePoweredTooLong = this.coffeeMachineUsingHours[1];
            console.log(data)
          }
        );

        this.coffeeMachineHistoryService.getCapsulesBrought(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            this.capsules = data;
          }
        );
        break;
      default:
        break;
    }
  }

  split(string, nb) {
    string = string.replace('[', '');
    string = string.replace(']', '');
    var array = string.split(',');
    return array[nb];
  }
}
