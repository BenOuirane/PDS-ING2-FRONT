import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ResidentService } from '../resident.service';
import { Room } from '../room';
import { Objects } from '../objects';
import { ObjectService } from '../object.service';
import { LampeService } from '../lampe.service';
import { Lampe } from '../lampe';

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
  dataloaded : boolean = false;



  constructor(private residentService: ResidentService, private objectService: ObjectService, private lampeService : LampeService) { }

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
                  ) 
            }
            this.dataloaded = true;
          })

      },  error => console.log(error)
      );

      



    
    
  }

}
