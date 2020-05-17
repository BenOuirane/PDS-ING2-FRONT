import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { positionService } from '../../services/position.service'
import {refresidentService} from '../../services/refresident.service';
import { Observable } from 'rxjs';
import { Area } from '../models/area';
import { FormControl } from '@angular/forms';
import { refresident } from 'src/app/refresident';
import { BraceletService } from "../../services/bracelet.service"
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/operators';
import {CurrentAreaService } from '../../services/current-area.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({

  selector: 'app-map-prototype',
  templateUrl: './map-prototype.component.html',
  styleUrls: ['./map-prototype.component.scss']
})


export class MapPrototypeComponent implements OnInit {
  filteredOptions: Observable<any>;
  
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
}
  _filter(value: any): any {
    throw new Error("Method not implemented.");
  }
  areas: Observable<Area>[];
  refresident: Observable<refresident[]>;
  bracletID: string;
  bracletDate: string = new Date().toISOString().slice(0, 16);
  myControl = new FormControl();

 // @ViewChild('mapAreaInput', {static: false}) mapAreaInput : ElementRef<HTMLInputElement>;
  @ViewChild('searchInput', {static: false}) searchInput : ElementRef<HTMLInputElement>;
constructor(private router:Router,private BraceletService: BraceletService,private currentAreaService : CurrentAreaService, private refresidentService: refresidentService){
    console.log("Start here")
    //console.log(this.reloadDataById)
    console.log("end here")
}  
  onSubmit() {
    console.log("search1 : "+this.bracletID)
    this.reloadDataSumById(this.bracletID);

  /*  this.BraceletService.getBraceletById(this.bracletID).subscribe((value) => {
      value = JSON.stringify(value)
      console.log(value);
  }, (error) => {
      console.log(error);
  }, () => {
     });
*/
  }
  
  reloadDataById() {
    console.log(this.searchInput.nativeElement.value);
    let inputValue = this.searchInput.nativeElement.value;
    //this.refresident = this.refresidentService.getUsersById('1');
    this.refresidentService.getUsersById(inputValue).subscribe(result => {
      console.log(result);
    });
  }
  loaddata(){
    this.reloadDataById();
    
  }

reloadDataSumById(id){
  console.log("reloadDataSumById")
  console.log(id);


  this.currentAreaService.getSumCurrentArea(id).subscribe((value) => {
    // value = JSON.stringify(value)
    console.log(value);
    localStorage.setItem('getSumCurrentAreaList', JSON.stringify(value));
    //this.router.navigate(['/heroes', { id: itemId }]);
    this.router.navigate(['/cache-sum-area-control-view']);

}, (error) => {
    console.log(error);
}, () => {
   });

}

/*
   methodCompliquee(v: string) {
///
  }
*/

onSubmitDate(){
  console.log(this.bracletDate)
}

}
