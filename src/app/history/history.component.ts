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

import { LampeService } from '../lampe.service';
import { ShutterService } from '../shutter.service';
import { AlarmClockService } from '../alarm-clock.service';
import { CoffeeMachineService } from '../coffee-machine.service';
import { OvenService } from '../oven.service';

import { Lampe } from '../lampe';
import { Oven } from '../oven';
import { Shutter } from '../shutter';
import { AlarmClock } from '../alarm-clock';
import { CoffeeMachine } from '../coffeeMachine';

import { Objects } from '../objects';
import { ObjectService } from '../object.service'

import { Notification } from "../notification";
import { User } from '../user';

import { NotificationService } from '../notification.service';
import { UserService } from "../user.service";

import { ResidentService } from '../resident.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  objectId: number;
  residentId: number;
  objectTypeString: string;
  histories: History[] = new Array<History>();
  object = new Objects();
  receiver = new User();
  notify: false;

  lamp= new Array<Lampe>();
  oven= new Array<Oven>();
  alarmClock= new Array<AlarmClock>();
  coffeeMachine= new Array<CoffeeMachine>();
  shutter= new Array<Shutter>();

  startDate = new Date();
  endDate = new Date();

  startDateString : string;
  endDateString : string;

  usingHours = new Array<Map<String[], number>>();
  powered = new Map<String[], number>();
  poweredTooLong = new Map<String[], number>();
  
  favoriteColor = new String();
  favoriteIntensity = new String();
  
  capsules = new Number;

  ovenTooHigh = new Array<History>();
  favoriteMode = new String;

  wronglyOpened = new Map<Array<String>, number>();

  alarmDuringNightime = new Array<History>();
  favoriteAlarm = new String();
  favoriteRadio = new String();

  user: User;
  notification: Notification = new Notification();

  constructor(private activatedroute: ActivatedRoute,private objectsService : ObjectService,  private objectsHistoryService : ObjectsHistoryService, private ovenHistoryService: OvenHistoryService, 
    private shutterHistoryService: ShutterHistoryService, private alarmClockHistoryService: AlarmClockHistoryService, private coffeeMachineHistoryService: CoffeeMachineHistoryService,
    private lampeService: LampeService, private ovenService: OvenService, private shutterService: ShutterService, private alarmClockService: AlarmClockService, private coffeeMachineService: CoffeeMachineService,
    private residentService: ResidentService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.objectId = parseInt(this.activatedroute.snapshot.paramMap.get("id"));
    this.residentId = parseInt(this.activatedroute.snapshot.paramMap.get("userId"));
    this.getObjects();
  }

  sendNotification(elementMessage : string, element : string, elementToggler: string){
    this.user = JSON.parse(localStorage.getItem('user'));

    this.residentService.getResidentById(this.residentId).subscribe(
      data => {
        this.notification.message = $(elementMessage).val();
        console.log(this.notification.message)
        this.notification.receiver = data;
        this.notification.title = "Mauvaise utilisation d'un appareil";
        this.notification.sender = this.user;
        this.notification.type = "OBJECT";
        this.notification.customData = this.objectId.toString();

        this.notificationService.createNotification(this.notification).subscribe(
          data => {
            $(element).append("La notification va être envoyée sous peu. Merci à vous.");
            setTimeout(function () {
              $(elementToggler).click();
            }, 2000);
            $(element).val("");
          },
          error => {
            console.log(error),
            $(elementMessage).append("Un problème est survenu, veuillez réessayer plus tard.");
          });

            this.receiver = data;
            console.log(this.receiver)
          }
        )
  }

  // Prendre en charge la date, 'il y a une semaine, il y a un mois"
  getObjects(){
    this.objectsService.getObjectById(this.objectId).subscribe(
      data => {
        this.object = data;
        switch (this.object.objectType) {
          case 'LAMP':
              this.lampeService.getlampe(this.object).subscribe(
                data => {
                  this.lamp = data;
                  this.getHistory();
                });
            break;
          case 'OVEN':
            this.ovenService.getOven(this.object).subscribe(
              data => {
                this.oven = data;
                this.getHistory();
              });
            break;
          case 'SHUTTER':
            this.shutterService.getshutter(this.object).subscribe(
              data => {
                this.shutter = data;
                this.getHistory();
              });
            break;
          case 'ALARMCLOCK':
            this.alarmClockService.getAlarmClock(this.object).subscribe(
              data => {
                this.alarmClock = data;
                this.getHistory();
              });
            break;
          case 'COFFEEMACHINE':
            this.coffeeMachineService.getCoffeeMachine(this.object).subscribe(
              data => {
                this.coffeeMachine = data;
                this.getHistory();
              });
            break;
          default:
            break;
        }
      }
    )
  }

  getHistory() {
    var datePipe = new DatePipe("fr-FR");

    // Testing with the date of 7 days ago
    this.endDate.setDate(this.endDate.getDate() - 7);

    // Creating date strings
    this.startDateString = datePipe.transform(this.startDate, 'yyyy-MM-dd hh:mm:ss');
    this.endDateString = datePipe.transform(this.endDate, 'yyyy-MM-dd hh:mm:ss');

    switch (this.object.objectType) {
      case 'LAMP':
        this.objectTypeString = "Lampe";
        // Get history by date
        this.objectsHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString, "lamp").subscribe(
          data => {
            this.usingHours = data;
            this.powered = this.usingHours[0];
            this.poweredTooLong = this.usingHours[1];
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
      case 'OVEN':
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
            this.usingHours = data;
            this.powered = this.usingHours[0];
            this.poweredTooLong = this.usingHours[1];
          }
        );
        // temperature asked on ihm
        this.ovenHistoryService.getTemperatureTooHigh(this.objectId, this.startDateString, this.endDateString, 600).subscribe(
          data => {
            this.ovenTooHigh = data;
          }
        );
        break;

      case 'SHUTTER':
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
            this.wronglyOpened = data;
          }
        );
        
        break;

      case 'ALARMCLOCK':
        this.objectTypeString = "Réveil";
        // Get history by date
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "radio", this.startDateString, this.endDateString, "alarmClock").subscribe(
          data => {
            this.favoriteRadio = data;
          }
        );
        this.objectsHistoryService.getHistoryFavoriteParameterByDate(this.objectId, "alarm", this.startDateString, this.endDateString, "alarmClock").subscribe(
          data => {
            this.favoriteAlarm = data;
          }
        );
        this.alarmClockHistoryService.getAlarmDuringNight(this.objectId, this.startDateString, this.endDateString).subscribe(
          data => {
            this.alarmDuringNightime = data;
          }
        );
        break;

      case 'COFFEEMACHINE':
        this.objectTypeString = "Machine à café" ;
        // Get history by date
        this.objectsHistoryService.getHistoryUsingHoursByDate(this.objectId, this.startDateString, this.endDateString, "coffeeMachine").subscribe(
          data => {
            this.usingHours = data;
            this.powered = this.usingHours[0];
            this.poweredTooLong = this.usingHours[1];
            console.log(this.poweredTooLong)
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
