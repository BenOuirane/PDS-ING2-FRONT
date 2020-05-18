import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs/internal/operators/isEmpty';

@Component({
  selector: 'app-cache-sum-area',
  templateUrl: './cache-sum-area.component.html',
  styleUrls: ['./cache-sum-area.component.scss']
})
export class CacheSumAreaComponent implements OnInit {
  data : any;
  emptydata:any= true;
  constructor() { 
      this.data = JSON.parse(localStorage.getItem("getSumCurrentAreaList"));
    console.log("koko"+ JSON.stringify(this.data))
    
    if(JSON.stringify(this.data) == "{}"){
      this.emptydata = false
    }
    // console.log(typeof(this.data))
  }

  ngOnInit() {
  }

}
