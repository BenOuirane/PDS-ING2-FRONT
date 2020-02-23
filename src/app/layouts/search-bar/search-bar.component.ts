import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { refresidentService } from '../../services/refresident.service';
import { ResidentService } from '../../services/resident.service';
import { Resident } from '../../resident';
import { refresident } from '../../refresident';
import { positionService } from '../../services/position.service'
//import { User } from '../user';

 
@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  refresident: Observable<refresident[]>;
  resident: Observable<Resident[]>;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
 @ViewChild('searchInput', {static: false}) searchInput : ElementRef<HTMLInputElement>;

  constructor(private refresidentService: refresidentService, private residentSerive: ResidentService, private positionService: positionService) {
    

console.log("start")
    // console.log(this.reloadDataById());
    console.log("end")

   }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
 
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
 
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  reloadDataById() {
    console.log(this.searchInput.nativeElement.value);
    let inputValue = this.searchInput.nativeElement.value;
    
    this.refresident = this.refresidentService.getUsersById('1');
   // this.refresidentService.getUsersById(inputValue).subscribe(result => {
      this.refresidentService.getUsersById(inputValue).subscribe(result => {
      console.log(result);
    });

    
  }


  loaddata(){
    this.reloadDataById();
  }

  /*createdata(){
    console.log("create ref position");
   // this.refresidentService.createPositionData().subscribe(response => {
      this.residentSerive.createPositionData().subscribe(response => {

      console.log(response);
    });
  }*/

  createpositiondata(){
    console.log("create positions ");
    this.refresidentService.createPositionData().subscribe(response => {
      console.log(response);
    });
  }
}
 

/* MOCKS METHODS TO BE DEACTIVATED NEXT SPRINT */