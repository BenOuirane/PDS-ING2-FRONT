import { Component, OnInit } from '@angular/core';
import {IndicatorsService} from "../indicators.service";
import * as Chart from 'chart.js';

declare var $: any;
@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})

//export class IndicatorsComponent implements OnInit {
export class IndicatorsComponent  {
  
  
 canvas: any;
  ctx: any;
  public residence: any;
  public failure: any;
  public failuremonth: any;
  public year: any;
  public month: any;
  public objects: any;
  public rooms: any;
  public chart: any;
  public formula2019: any [] = [];
  public formula2020: any [] = [];
  public monthturnover1: any [] = [];
  public monthturnover2: any [] = [];
  public annualturnover: any [] = [];
  public year_subscription: any;
  public month_subscription: any;


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

    this.indicatorsService.getTotalSubscription(2019)
      .subscribe(
        (response) => {
          for (var i = 0; i < response.length; i++) {
            this.formula2019.push(response[i]);
          }
          console.log('after loop: ', this.formula2019);
        }

      );

    this.indicatorsService.getTotalSubscription(2020)
      .subscribe(
        (response) => {
          for(var i = 0; i < response.length; i++) {
            this.formula2020.push(response[i]);
          }

          console.log('after loop: ', this.formula2020);

        }
      );

    this.indicatorsService.getMonthSubscription(2019)
      .subscribe(
        (response) => {
          for(var i = 0; i < response.length; i++) {
            this.monthturnover1.push(response[i]);
          }
          console.log('after loop: ', this.monthturnover1);

        }

      );

    this.indicatorsService.getMonthSubscription(2020)
      .subscribe(
        (response) => {
          for(var i = 0; i < response.length; i++) {
            this.monthturnover2.push(response[i]);
          }

          console.log('after loop: ', this.monthturnover2);

        }
      );
    this.ngAfterViewInit();
    this.indicatorsService.getAnnualSubscription()
      .subscribe(
        (response) => {
          for(var i = 0; i < response.length; i++) {
            this.annualturnover.push(response[i]);
          }

          console.log('after loop: ', this.annualturnover);
          this.ngAfterViewInit();
        }

      );

  }

  ngAfterViewInit() {

    this.canvas = document.getElementById('chart');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Basique', 'Confort', 'Luxe'],
        datasets: [{
          label: 'Taux ',
          data: this.formula2019,
          animateScale: true,
          backgroundColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 0, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });


    this.canvas = document.getElementById('chart1');
    this.ctx = this.canvas.getContext('2d');
    let chart1 = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: ['Basique', 'Confort', 'Luxe'],
        datasets: [{
          label: 'Formules d&#039abonnement ',
          data: this.formula2020,
          backgroundColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(127, 0, 255, 1)',
            'rgba(255, 0, 0, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,
        display: true
      }
    });

    let chart2 = new Chart(document.getElementById('chart2'), {
      type: 'bar',
      data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre", "Novembre", "Decembre"],
        datasets: [
          {
            label: " CA en Euros",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9"],
            data: this.monthturnover1
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Chiffre d\'affaire mensuel (en Euros)  de l\'entreprise en  2019'
        }
      }
    });

    let chart3 = new Chart(document.getElementById('chart3'), {
      type: 'bar',
      data: {
        labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre","Octobre", "Novembre", "Decembre"],
        datasets: [
          {
            label: " CA en Euros",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9"],
            data: this.monthturnover2
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Chiffre d\'affaire mensuel (en Euros)  de l\'entreprise en  2020'
        }
      }
    });

    let chart4 = new Chart(document.getElementById('chart4'), {
      type: 'bar',
      data: {
        labels: ["2019", "2020"],
        datasets: [
          {
            label: " CA annuel en Euros",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: this.annualturnover
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Chiffre d\'affaire annuel (en Euros)  de l\'entreprise '
        }
      }
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

  