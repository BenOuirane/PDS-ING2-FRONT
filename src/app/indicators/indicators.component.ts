import { Component, OnInit } from '@angular/core';
import {IndicatorsService} from "../indicators.service";

declare var $: any;
@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  public residence: any;
  public failure: any;
  public failuremonth: any;
  public year: any;
  public month: any;
  public objects: any;
  public rooms: any;

  constructor(private indicatorsService: IndicatorsService) {

  }

  ngOnInit() {
    this.indicatorsService.getObjects()
      .subscribe(data => {
        this.objects = data;
      }, err => {
        console.log(err);
      });
    this.indicatorsService.getRooms()
      .subscribe(data => {
        this.rooms = data;
      }, err => {
        console.log(err);
      });

  }

  onGetResidence() {
    this.indicatorsService.getResidence()
      .subscribe(data => {
        this.residence = data;
      }, err => {
        console.log(err);
      });

  }
  onGetFailure(val: number) {
    this.indicatorsService.getAnnualFailure(val)
      .subscribe(data => {
        this.failure = data;
        this.year = val;
      }, err => {
        console.log(err);
      });
  }

  onGetMonthlyFailure(month: number) {
  if (month == 1) {
    this.indicatorsService.getMonthlyFailure1()
        .subscribe(data => {
          this.failuremonth = data;
          this.year = 2019;
          this.month = "Décembre";
        }, err => {
          console.log(err);
        });
  }
    else if (month == 2) {
      this.indicatorsService.getMonthlyFailure2()
        .subscribe(data => {
          this.failuremonth = data;
          this.year = 2020;
          this.month = "Janvier";
        }, err => {
          console.log(err);
        });
    }
  else if (month == 3) {
    this.indicatorsService.getMonthlyFailure3()
      .subscribe(data => {
        this.failuremonth = data;
        this.year = 2020;
        this.month = "Février";
      }, err => {
        console.log(err);
      });
  }
  }

  annualfailureChange() {

    if ($('#annual_failure_rate').val() == 'annual_failure_rate_1') {
      this.onGetFailure(2019);
    }
   else if($('#annual_failure_rate').val() == 'annual_failure_rate_2') {
  this.onGetFailure(2020);
  }

}
  monthlyfailureChange() {
    if ($('#monthly_failure_rate').val() == 'monthly_failure_rate_1') {
      this.onGetMonthlyFailure(1);
    } else if ($('#monthly_failure_rate').val() == 'monthly_failure_rate_2') {
      this.onGetMonthlyFailure(2);
    }
     else if ($('#monthly_failure_rate').val() == 'monthly_failure_rate_3') {
      this.onGetMonthlyFailure(3);
    }

  }

}
