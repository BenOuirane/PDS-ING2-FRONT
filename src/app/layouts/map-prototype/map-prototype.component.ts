import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { positionService } from '../../services/position.service'
import { Observable } from 'rxjs';
import { Area } from '../../area';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-map-prototype',
  templateUrl: './map-prototype.component.html',
  styleUrls: ['./map-prototype.component.scss']
})
export class MapPrototypeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  areas: Observable<Area>[];
 
  @ViewChild('mapAreaInput', {static: false}) mapAreaInput : ElementRef<HTMLInputElement>;
/*constructor(private currentAreaService : currentareaService, private positionService: positionService){
    console.log("Start here")
    console.log(this.reloadDataById)
    console.log("end here")
  }
  
/* reloadDataById() {
    console.log(this.searchInput.nativeElement.value);
    let inputValue = this.searchInput.nativeElement.value;
    
    
    this.refresidentService.getUsersById(inputValue).subscribe(result => {
    console.log(result);
    });

    
  }
  loaddata(){
    this.reloadDataById();
  }
*/
  methodCompliquee(v: string) {
///
  }


}
