import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ResidentService } from '../resident.service';
import { Room } from '../room';
import { Objects } from '../objects';
import { ObjectService } from '../object.service';
import { LampeService } from '../lampe.service';
import { OvenService } from '../oven.service';
import { Lampe } from '../lampe';
import { MethodCall } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Oven } from '../oven';

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  user : User = new User(); 
  room : Room = new Room(); 
  roomString : string; 
  objects : Objects[] = new Array<Objects>();
  lamps : Lampe[] = new Array<Lampe>();
  ovens : Oven[] = new Array<Oven>();
  dataloaded : boolean = false;
  LampStatus : boolean = false;



  constructor(private residentService: ResidentService, private objectService: ObjectService, private lampeService : LampeService, private ovenService : OvenService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));

    this.residentService.getResident(this.user).subscribe(
      data => {
        this.room = data.room; 
        this.objects = this.room.objects;
        
        this.objects.forEach(object =>
          {
            switch(object.objectType){
                case 'LAMP' : 
                  this.lampeService.getlampe(object).subscribe(
                    data => {
                      this.lamps = data;
                      console.log(data);
                    }
                  ); break; 
                case 'OVEN' : console.log(object); 
                this.ovenService.getOven(object).subscribe(
                  data => {
                    this.ovens = data; 
                    console.log(data);
                  }
                ); break; 

                default : 
                break;
            }
            this.dataloaded = true;
          })

      },  error => console.log(error)
      );

      



    
    
  }

}
