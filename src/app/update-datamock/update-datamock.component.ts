import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { refresidentService } from '../refresident.service';
import { refresident } from '../refresident';
@Component({
  selector: 'app-update-datamock',
  templateUrl: './update-datamock.component.html',
  styleUrls: ['./update-datamock.component.scss']
})
export class UpdateDatamockComponent implements OnInit {
  refresident: Observable<refresident[]>;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  filteredOptions: Observable<string[]>;
  @ViewChild('updateInput', {static: false}) updateInput : ElementRef<HTMLInputElement>;

  constructor(private refresidentService: refresidentService) {
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
    console.log(this.updateInput.nativeElement.value);
    let inputValue = this.updateInput.nativeElement.value;
    
    //this.refresident = this.refresidentService.getUsersById('1');
    this.refresidentService.getUsersById(inputValue).subscribe(result => {
      console.log(result);
    });
  }
   
    updatedata(){
      console.log("update");
      this.refresidentService.updatePositionData().subscribe(response => {
        console.log(response);
      });
    }
  }
