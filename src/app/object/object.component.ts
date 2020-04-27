import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ResidentService } from '../services/resident.service';
import { Room } from '../room';
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
import { FormBuilder } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ScenarioMyMorning } from '../scenarioMyMorning';


registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  user: User = new User();
  room: Room = new Room();
  roomString: string;
  objects: Objects[] = new Array<Objects>();
  lamps: Lampe[] = new Array<Lampe>();
  ovens: Oven[] = new Array<Oven>();
  alarmClocks: AlarmClock[] = new Array<AlarmClock>();
  coffeeMachines: CoffeeMachine[] = new Array<CoffeeMachine>();
  shutters: Shutter[] = new Array<Shutter>();
  dataloaded = false;
  LampStatus = false;
  checkoutFormLamp;
  checkoutFormShutter;
  checkoutFormAlarmClock;
  checkoutFormCoffeeMachine;
  checkoutFormOven;
  formMyMorning;
  test: boolean;
  now: Date = new Date();
  interval;

  constructor(private residentService: ResidentService,
    private objectService: ObjectService,
    private lampeService: LampeService,
    private ovenService: OvenService,
    private shutterService: ShutterService,
    private alarmClockService: AlarmClockService,
    private coffeeMachineService: CoffeeMachineService,
    private formBuilder: FormBuilder,
    private atp: AmazingTimePickerService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    setInterval(() => {
      this.now = new Date();
    }, 1);

    this.getResidentService();

    this.initForm();

  }





  private getResidentService(): void {

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
                    }
                  );
                  break;
                case 'OVEN':
                  this.ovenService.getOven(object).subscribe(
                    data => {
                      this.ovens = data;
                    }
                  );
                  break;

                case 'SHUTTER':
                  this.shutterService.getshutter(object).subscribe(
                    data => {
                      this.shutters = data;
                    }
                  );
                  break;

                case 'ALARMCLOCK':
                  this.alarmClockService.getAlarmClock(object).subscribe(
                    data => {
                      this.alarmClocks = data;
                    }
                  );
                  break;

                case 'COFFEEMACHINE':
                  this.coffeeMachineService.getCoffeeMachine(object).subscribe(
                    data => {
                      this.coffeeMachines = data;
                    }
                  );
                  break;


                default:
                  break;
              }
              this.dataloaded = true;
            });
          }
        );
      }, error => console.log(error)
    );
  }

  // Initiate the form
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
      idShutter: Number,
      hourOn: String,
      hourOff: String,
      status: Boolean,
      hourOnUsine: String,
      hourOffUsine: String,
      statusUsine: Boolean,
      objects: Objects
    });

    this.checkoutFormAlarmClock = this.formBuilder.group({
      idAlarmClock: Number,
      alarm: String,
      radioHrz: Number,
      radioStatus: Boolean,
      alarmStatus: Boolean,
      alarmUsine: String,
      radioHrzUsine: Number,
      radioStatusUsine: Boolean,
      alarmStatusUsine: Boolean,
      objects: Objects
    })
    this.checkoutFormCoffeeMachine = this.formBuilder.group({
      idCoffee: Number,
      nbCapsule: Number,
      scheduleCoffee: String,
      status: Boolean,
      waterLevel: Number,
      nbCapsuleUsine: Number,
      scheduleCoffeeUsine: String,
      statusUsine: Boolean,
      waterLevelUsine: Number,
      objects: Objects
    })
    this.checkoutFormOven = this.formBuilder.group({
      idOven: Number,
      effectiveTemp: Number,
      programTemp: Number,
      scheduleTime: String,
      status: Boolean,
      mode: String,
      effectiveTempUsine: Number,
      programTempUsine: Number,
      scheduleTimeUsine: String,
      statusUsine: Boolean,
      modeUsine: String,
      objects: Objects
    })

    this.formMyMorning = this.formBuilder.group({
      selectAlarmClock: AlarmClock,
      selectCoffeeMachine: CoffeeMachine,
      selectLamp: Lampe,
      selectShutter: Shutter

    })
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

  //BUild the objects and send it to the back for update /api/xxxxx/updateParam
  build(type: string) {

    switch (type) {
      case 'lamp':

        this.lampeService.updateLamp(this.checkoutFormLamp.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
        break;
      case 'shutter':
        this.shutterService.updateShutter(this.checkoutFormShutter.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
        break;
      case 'alarmClock':
        this.alarmClockService.updateAlarmClock(this.checkoutFormAlarmClock.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
        break;
      case 'coffeeMachine':
        this.coffeeMachineService.updateCoffeeMachine(this.checkoutFormCoffeeMachine.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
        break;
      case 'oven':
        this.ovenService.updateOven(this.checkoutFormOven.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
        this.objects.forEach(object => {
          if (object.id == this.checkoutFormOven.value.objects.id) {
            this.interval = setInterval(() => {
              this.ovenService.getOven(object).subscribe(
                data => {
                  for (let oven of this.ovens) {
                    if (this.checkoutFormOven.value.idOven == oven.idOven) {
                      for (let data2 of data) {
                        oven.effectiveTemp = data2.effectiveTemp;
                        if (oven.effectiveTemp == 0 || oven.effectiveTemp == oven.programTemp) {
                          clearInterval(this.interval);
                        }
                      }
                    }
                  }
                })
            }, 3000);
            return;
          }
        });

        break;

      case 'myMorning':
        const formValue = this.formMyMorning.value;
        const myMorning: ScenarioMyMorning = {
          lamp: formValue.selectLamp,
          shutter: formValue.selectShutter,
          alarmClock: formValue.selectAlarmClock,
          coffeeMachine: formValue.selectCoffeeMachine
        };
        this.objectService.scenarioMyMorning(myMorning).subscribe(
          data => {
            console.log("scenarioMyMorning", myMorning);
            
            console.log(data);
            this.getResidentService();
          },
          err => {
            console.log("Les objets ne sont pas correctement mis à jours." + err);
          }
        );
        
        break;

    }
    this.getResidentService();

  }





  //Build the tiestamp format on schedule time for ON
  openOn(timestamp: string, type: string) {

    let time = new Date(timestamp);
    console.log("time.toTimeString()", time.toTimeString());

    const amazingTimePicker = this.atp.open({
      time: time.toTimeString()
    });

    switch (type) {
      case 'lamp':
        amazingTimePicker.afterClose().subscribe(time => {

          let hourOn = this.commonDate(time);
          this.checkoutFormLamp.value.hourOn = hourOn;
        });

        return this.checkoutFormLamp.value.hourOn;

      case 'shutter':
        amazingTimePicker.afterClose().subscribe(time => {

          let hourOn = this.commonDate(time);
          this.checkoutFormShutter.value.hourOn = hourOn;
        });

        return this.checkoutFormShutter.value.hourOn;

      case 'alarm':
        amazingTimePicker.afterClose().subscribe(time => {

          let alarm = this.commonDate(time);
          this.checkoutFormAlarmClock.value.alarm = alarm;
        });

        return this.checkoutFormAlarmClock.value.alarm;

      case 'coffeeMachine':
        amazingTimePicker.afterClose().subscribe(time => {

          let scheduleCoffee = this.commonDate(time);
          this.checkoutFormCoffeeMachine.value.scheduleCoffee = scheduleCoffee;
        });

        return this.checkoutFormCoffeeMachine.value.scheduleCoffee;

      case 'oven':
        amazingTimePicker.afterClose().subscribe(time => {

          let scheduleTime = this.commonDate(time);
          this.checkoutFormOven.value.scheduleTime = scheduleTime;
        });

        return this.checkoutFormOven.value.scheduleTime;

      case 'myMorning':

        amazingTimePicker.afterClose().subscribe(time => {
          let myMorning = this.commonDate(time);

          this.formMyMorning.value.selectAlarmClock.alarm = myMorning;
        });

        return this.formMyMorning.value.myMorning
    }
  }

  //Build the tiestamp format on schedule time for OFF
  openOff(timestamp: string, type: string) {
    let time = new Date(timestamp);

    const amazingTimePicker = this.atp.open({
      time: time.toTimeString()
    });

    switch (type) {

      case 'lamp':
        amazingTimePicker.afterClose().subscribe(time => {

          let hourOff = this.commonDate(time);
          this.checkoutFormLamp.value.hourOff = hourOff;
        });

        return this.checkoutFormLamp.value.hourOff;
      case 'shutter':
        amazingTimePicker.afterClose().subscribe(time => {

          let hourOff = this.commonDate(time);
          this.checkoutFormCoffeeMachine.value.hourOff = hourOff;
        });

        return this.checkoutFormCoffeeMachine.value.hourOff;
    }
  }

  private commonDate(time: string): number {
    const split = time.split(':');
    const hours = Number.parseInt(split[0]);
    const minutes = Number.parseInt(split[1]);

    const myDate = new Date();
    myDate.setHours(hours);
    myDate.setMinutes(minutes);

    return myDate.getTime();
  }


  //Used to restore usine parameters. Switch on each objects' type
  restore(type: string, idObject: Number) {

    switch (type) {
      case 'lamp':
        this.checkoutFormLamp.value.idLamp = idObject;
        this.checkoutFormLamp.value.hourOff = this.checkoutFormLamp.value.hourOffUsine;
        this.checkoutFormLamp.value.hourOn = this.checkoutFormLamp.value.hourOnUsine;
        this.checkoutFormLamp.value.color = this.checkoutFormLamp.value.colorUsine;
        this.checkoutFormLamp.value.status = this.checkoutFormLamp.value.statusUsine;

        this.build("lamp");
        /*this.lampeService.updateLamp(this.checkoutFormLamp.value).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );*/
        break;

      case 'oven':
        this.checkoutFormOven.value.idOven = idObject;
        this.checkoutFormOven.value.programTemp = this.checkoutFormOven.value.programTempUsine;
        this.checkoutFormOven.value.scheduleTime = this.checkoutFormOven.value.scheduleTimeUsine;
        this.checkoutFormOven.value.status = this.checkoutFormOven.value.statusUsine;
        this.checkoutFormOven.value.mode = this.checkoutFormOven.value.modeUsine;

        this.build("oven");
        break;

      case 'shutter':
        this.checkoutFormShutter.value.idOven = idObject;
        this.checkoutFormShutter.value.hourOn = this.checkoutFormShutter.value.hourOnUsine;
        this.checkoutFormShutter.value.hourOff = this.checkoutFormShutter.value.hourOffUsine;
        this.checkoutFormShutter.value.status = this.checkoutFormShutter.value.statusUsine;

        this.build("shutter");
        break;

      case 'alarmClock':
        this.checkoutFormAlarmClock.value.idOven = idObject;
        this.checkoutFormAlarmClock.value.alarm = this.checkoutFormAlarmClock.value.alarmUsine;
        this.checkoutFormAlarmClock.value.radioHrz = this.checkoutFormAlarmClock.value.radioHrzUsine;
        this.checkoutFormAlarmClock.value.radioStatus = this.checkoutFormAlarmClock.value.radioStatusUsine;
        this.checkoutFormAlarmClock.value.alarmStatus = this.checkoutFormAlarmClock.value.alarmStatusUsine;

        this.build("alarmClock");
        break;

      case 'coffeeMachine':
        this.checkoutFormCoffeeMachine.value.idOven = idObject;
        this.checkoutFormCoffeeMachine.value.scheduleCoffee = this.checkoutFormCoffeeMachine.value.scheduleCoffeeUsine;
        this.checkoutFormCoffeeMachine.value.status = this.checkoutFormCoffeeMachine.value.statusUsine;

        this.build("coffeeMachine");
        break;
    }
    this.getResidentService();
  }

  expresso(idObject: Number) {

    for (let object of this.coffeeMachines) {
      if (object.idCoffee == idObject) {
        console.log(object);
        this.coffeeMachineService.makeCoffee(object).subscribe(
          data => {
            console.log(data);
          },
          err => {
            console.log(err);
          }
        );
      }
    }

    this.getResidentService();


  }

}
