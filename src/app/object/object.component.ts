import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ResidentService } from '../resident.service';
import { Rooms } from '../room';
import { Objects } from '../objects';
import { ObjectService } from '../object.service';
import { LampeService } from '../lampe.service';
import { ShutterService } from '../shutter.service';
import { AlarmClockService } from '../alarm-clock.service';
import { CoffeeMachineService } from '../coffee-machine.service';
import { OvenService } from '../oven.service';
import { Lampe } from '../lampe';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Oven } from '../oven';
import { Shutter } from '../shutter';
import { AlarmClock } from '../alarm-clock';
import { CoffeeMachine } from '../coffeeMachine';
import { FormBuilder} from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';


registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  user: User = new User();
  room: Rooms = new Rooms();
  roomString: string;
  objects: Objects[] = new Array<Objects>();
  lamps: Lampe[] = new Array<Lampe>();
  ovens: Oven[] = new Array<Oven>();
  alarmClocks: AlarmClock[] = new Array<AlarmClock>();
  coffeeMachines: CoffeeMachine[] = new Array<CoffeeMachine>();
  shutters: Shutter[] = new Array<Shutter>();
  dataloaded: boolean = false;
  LampStatus: boolean = false;
  checkoutFormLamp;
  checkoutFormShutter; 
  test: boolean;




  constructor(private residentService: ResidentService,
    private objectService: ObjectService,
    private lampeService: LampeService,
    private ovenService: OvenService,
    private shutterService: ShutterService,
    private alarmClockService: AlarmClockService,
    private coffeeMachineService: CoffeeMachineService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.residentService.getResident(this.user).subscribe(
      data => {
        this.room = data.room;
       
        this.objectService.getObject(this.room).subscribe(
          data => {
            this.objects = data;
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
                  ); break;


                default:
                  break;
              }
              this.dataloaded = true;
            })
          }
        );



      }, error => console.log(error)
    );

    this.initForm();
  }

  private initForm(): void {
    this.checkoutFormLamp = this.formBuilder.group({
      idLamp: Number,
      status: Boolean,
      hourOn: String,
      hourOff: String,
      intensity: Number,
      color: String,
      colorUsine: String,
      statusUsine: Boolean,
      hourOnUsine: String,
      hourOffUsine: String,
      intensityUsine: Number,
      objects: Objects
    });

    this.checkoutFormShutter = this.formBuilder.group({
      idShutter : Number,      
      hourOn : String,
      hourOff : String,
      status : Boolean,
      hourOnUsine : String,
      hourOffUsine : String,
      statusUsine : Boolean,
      object : Objects
    });

  }


  //Used to get automaticaly the right color 
  colorOnChange(value: string): string {
    let color: string = '';
    switch (value) {
      case 'WHITE':
        color = 'Blanche'
        break;
      case 'BLUE':
        color = 'Bleue'
        break;
      case 'GREEN':
        color = 'Verte'
        break;
      case 'YELLOW':
        color = 'Jaune'
        break;

      default:
        break;

    }
    return color;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  buildLamp() {
    console.log("buildLamp : ", this.checkoutFormLamp.value);
    this.lampeService.updateLamp(this.checkoutFormLamp.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  buildShutter() {
    console.log("buildShutter : ", this.checkoutFormShutter.value);
    this.shutterService.updateShutter(this.checkoutFormShutter.value).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }


}
