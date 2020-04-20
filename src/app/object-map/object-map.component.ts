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
import { ResidentService } from '../resident.service';

import { Objects } from '../objects';
import { Lampe } from '../lampe';
import { Oven } from '../oven';
import { Shutter } from '../shutter';
import { AlarmClock } from '../alarm-clock';
import { CoffeeMachine } from '../coffeeMachine';
import { Resident } from '../resident';

declare var $: any;

@Component({
  selector: 'app-object-map',
  templateUrl: './object-map.component.html',
  styleUrls: ['./object-map.component.scss']
})
export class ObjectMapComponent implements OnInit {

  rooms: Room[];
  activeRoom: Room;

  numberOfObjects: number = 0;
  numberOfObjectsBreakdown: number = 0;
  roomsWithObjects: Map<Room, Objects[]> = new Map<Room, Objects[]>();

  roomsWithLamps: Map<Room, Lampe[]> = new Map<Room, Lampe[]>();
  roomsWithOven: Map<Room, Oven[]> = new Map<Room, Oven[]>();
  roomsWithAlarmClocks: Map<Room, AlarmClock[]> = new Map<Room, AlarmClock[]>();
  roomsWithCoffeeMachine: Map<Room, CoffeeMachine[]> = new Map<Room, CoffeeMachine[]>();
  roomsWithShutter: Map<Room, Shutter[]> = new Map<Room, Shutter[]>();

  objects: Objects[] = new Array<Objects>();

  lamps: Lampe[] = new Array<Lampe>();
  ovens: Oven[] = new Array<Oven>();
  alarmClocks: AlarmClock[] = new Array<AlarmClock>();
  coffeeMachines: CoffeeMachine[] = new Array<CoffeeMachine>();
  shutters: Shutter[] = new Array<Shutter>();

  resident : Resident = new Resident();

  constructor(private roomService: RoomService, private objectService: ObjectService, private lampeService: LampeService, private ovenService: OvenService, private shutterService: ShutterService, private alarmClockService: AlarmClockService, private coffeeMachineService: CoffeeMachineService, private residentService : ResidentService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe(
      data => {
        this.rooms = data;
      });

    timer(120000).subscribe(x => {
      this.roomsWithObjects.clear;
      this.roomsWithLamps.clear;
      this.roomsWithOven.clear;
      this.roomsWithAlarmClocks.clear;
      this.roomsWithCoffeeMachine.clear;
      this.roomsWithShutter.clear;

      console.log("CLEARING DATA");
    });

  }

  setRoomSummary($event) {
    var target = $event.target || $event.srcElement || $event.currentTarget;
    var value = target.attributes.id.nodeValue;

    this.rooms.forEach(room => {
      if (room.roomNumber == value) {
        this.gettingRoomInfos(room);
        this.activeRoom = room;
      }
    });
  }

  gettingRoomInfos(activeRoom: Room) {
    this.lamps = new Array<Lampe>();
    this.ovens = new Array<Oven>();
    this.alarmClocks = new Array<AlarmClock>();
    this.coffeeMachines = new Array<CoffeeMachine>();
    this.shutters = new Array<Shutter>();

    this.numberOfObjectsBreakdown = 0;

    this.residentService.getResidentByRoom(activeRoom).subscribe(
      data => {
        this.resident = data;
        console.log(data);
      }
    )

    if (this.roomsWithObjects.has(activeRoom)) {
      this.objects = this.roomsWithObjects.get(activeRoom);
      this.numberOfObjects = this.objects.length;

      if (this.numberOfObjects > 0) {
        this.createObjectTypeList(this.objects, activeRoom);
      }

    } else {
      this.objectService.getObject(activeRoom).subscribe(
        data => {
          this.objects = data;
          this.numberOfObjects = this.objects.length;

          if (this.numberOfObjects > 0) {
            this.createObjectTypeList(this.objects, activeRoom);
          }

          this.roomsWithObjects.set(activeRoom, this.objects);
        });
    }

    if ($("#room-summary-none").css("display") == "block") {
      $("#room-summary-none").css("display", "none");
      $("#room-summary-full").css("display", "block");
    }

  }

  createObjectTypeList(objects: Objects[], activeRoom: Room) {
    objects.forEach(object => {
      object.state == false ? this.numberOfObjectsBreakdown = this.numberOfObjectsBreakdown + 1 : '';
      switch (object.objectType) {
        case 'LAMP':
          if (this.roomsWithLamps.get(activeRoom)) {
            this.lamps = this.roomsWithLamps.get(activeRoom);
          } else {
            this.lampeService.getlampe(object).subscribe(
              data => {
                this.lamps = data;
                this.roomsWithLamps.set(activeRoom, this.lamps);
                console.log(data);
              });
          }
          break;
        case 'OVEN':
          if (this.roomsWithOven.get(activeRoom)) {
            this.ovens = this.roomsWithOven.get(activeRoom);
          } else {
            this.ovenService.getOven(object).subscribe(
              data => {
                this.ovens = data;
                this.roomsWithOven.set(activeRoom, this.ovens);
              });
          }
          break;
        case 'SHUTTER':
          if (this.roomsWithShutter.get(activeRoom)) {
            this.shutters = this.roomsWithShutter.get(activeRoom);
          } else {
            this.shutterService.getshutter(object).subscribe(
              data => {
                this.shutters = data;
                this.roomsWithShutter.set(activeRoom, this.shutters);
              });
          }
          break;
        case 'ALARMCLOCK':
          if (this.roomsWithAlarmClocks.get(activeRoom)) {
            this.alarmClocks = this.roomsWithAlarmClocks.get(activeRoom);
          } else {
            this.alarmClockService.getAlarmClock(object).subscribe(
              data => {
                this.alarmClocks = data;
                this.roomsWithAlarmClocks.set(activeRoom, this.alarmClocks);
              });
          }
          break;
        case 'COFFEEMACHINE':
          if (this.roomsWithCoffeeMachine.get(activeRoom)) {
            this.coffeeMachines = this.roomsWithCoffeeMachine.get(activeRoom);
          } else {
            this.coffeeMachineService.getCoffeeMachine(object).subscribe(
              data => {
                this.coffeeMachines = data;
                this.roomsWithCoffeeMachine.set(activeRoom, this.coffeeMachines);
              });
          }
          break;
        default:
          break;
      }
    })
  }
  
}
