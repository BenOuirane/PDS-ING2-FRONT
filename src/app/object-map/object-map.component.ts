import { Component, OnInit } from '@angular/core';

import { Room } from "../room";
import { RoomService } from '../room.service';

import { timer } from 'rxjs';

import { ObjectService } from '../object.service';
import { LampeService } from '../lampe.service';
import { ShutterService } from '../shutter.service';
import { AlarmClockService } from '../alarm-clock.service';
import { CoffeeMachineService } from '../coffee-machine.service';
import { OvenService } from '../oven.service';

import { Objects } from '../objects';
import { Lampe } from '../lampe';
import { Oven } from '../oven';
import { Shutter } from '../shutter';
import { AlarmClock } from '../alarm-clock';
import { CoffeeMachine } from '../coffeeMachine';

declare var $: any;

@Component({
  selector: 'app-object-map',
  templateUrl: './object-map.component.html',
  styleUrls: ['./object-map.component.scss']
})
export class ObjectMapComponent implements OnInit {

  rooms: Room[];
  
  numberOfObjects: number = 0;
  roomsWithObjects: Map<Room, Objects[]> = new Map<Room, Objects[]>();

  /*roomsWithLamps: Map<Room, Lampe[]> = new Map<Room, Lampe[]>();
  roomsWithOven: Map<Room, Oven[]> = new Map<Room, Oven[]>();
  roomsWithAlarmClocks: Map<Room, AlarmClock[]> = new Map<Room, AlarmClock[]>();
  roomsWithCoffeeMachine: Map<Room, CoffeeMachine[]> = new Map<Room, CoffeeMachine[]>();
  roomsWithShutter: Map<Room, Shutter[]> = new Map<Room, Shutter[]>();*/

  objects: Objects[] = new Array<Objects>();
  lamps: Lampe[] = new Array<Lampe>();
  ovens: Oven[] = new Array<Oven>();
  alarmClocks: AlarmClock[] = new Array<AlarmClock>();
  coffeeMachines: CoffeeMachine[] = new Array<CoffeeMachine>();
  shutters: Shutter[] = new Array<Shutter>();

  constructor(private roomService: RoomService, private objectService: ObjectService, private lampeService: LampeService, private ovenService: OvenService, private shutterService: ShutterService, private alarmClockService: AlarmClockService, private coffeeMachineService: CoffeeMachineService) { 
    
  }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
        console.log(data)
      },
      error => {
        console.log(error)
      });

      timer(120000).subscribe(x => {
        this.roomsWithObjects.clear;
      });
      
  }

  setRoomSummary($event){
    var target = $event.target || $event.srcElement || $event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;

    this.rooms.forEach(room => {
      if(room.roomNumber == value) {
        console.log("Value " + value + " room number " + room.roomNumber);
        this.gettingRoomObjects(room);
      }
    });
  }

  gettingRoomObjects(room: Room){
      if(this.roomsWithObjects.has(room)){
        this.objects = this.roomsWithObjects.get(room);
        this.numberOfObjects = this.objects.length;

        if(this.objects.length > 0){
          this.settingObject(this.objects);
        }

       } else {
        this.objectService.getObject(room).subscribe(
          data => {
            this.objects = data;
            this.numberOfObjects = this.objects.length;

            if(this.numberOfObjects > 0){
              this.settingObject(this.objects);
            }

            this.roomsWithObjects.set(room, this.objects);
          });
      }

      this.lamps = new Array<Lampe>();
      this.ovens = new Array<Oven>();
      this.alarmClocks = new Array<AlarmClock>();
      this.coffeeMachines = new Array<CoffeeMachine>();
      this.shutters = new Array<Shutter>();

      $("#room-summary-none").css("display", "none");
      $("#room-summary-full").css("display", "block");
  }

  settingObject(objects: Objects[]){
    this.objects.forEach(object => {
      switch (object.objectType) {
        case 'LAMP':
          this.lampeService.getlampe(object).subscribe(
            data => {
              this.lamps = data;
              console.log(data);
            }
          ); break;
        case 'OVEN':
          this.ovenService.getOven(object).subscribe(
            data => {
              this.ovens = data;
              console.log(data);
            }
          ); break;

        case 'SHUTTER':
          this.shutterService.getshutter(object).subscribe(
            data => {
              this.shutters = data;
              console.log(data);
            }
          ); break;

        case 'ALARMCLOCK':
          this.alarmClockService.getAlarmClock(object).subscribe(
            data => {
              this.alarmClocks = data;
              console.log(data);
            }
          ); break;

        case 'COFFEEMACHINE':
          this.coffeeMachineService.getCoffeeMachine(object).subscribe(
            data => {
              this.coffeeMachines = data;
              console.log(data);
            }
          ); 
          break;


        default:
          break;
      }
  })
}

  

  /*
  1 - getting rooms
  2 - Getting objects by room
  3 - Getting objects on other page
  */

}
