import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-area-detail',
  templateUrl: './current-area-detail.component.html',
  styleUrls: ['./current-area-detail.component.scss']
})
export class CurrentAreaDetailComponent implements OnInit {
  data : any;
  emptydata:any= true;
  Datalist:any;
  dataArray: any = new Array();

  varI :any = 10;
  constructor() { 
      this.data = JSON.parse(localStorage.getItem("getAllCurrentArea"));
       this.Datalist = JSON.stringify(this.data)

       
       let values = Object.keys(this.data).map(key => this.data[key]);
       for(let i in values){
         this.dataArray.push(values[i]['id'])
       }

       console.log(this.dataArray)
        
    if(JSON.stringify(this.data) == "{}"){
      this.emptydata = false
    }
  }

  ngOnInit() {
  }

  showmore(){
    this.varI = this.varI +5
  }
}
