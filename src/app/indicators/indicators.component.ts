import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
public residence: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onGetResidence() {
    this.httpClient.get("http://localhost:8080//residence")
      .subscribe(data=>{
        this.residence=data;
      }, err=>{
        console.log(err);
      });

  }
}

