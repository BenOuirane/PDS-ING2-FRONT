import { Component, OnInit } from '@angular/core';
import { FailureService } from '../services/failure.service';
import { Failure } from '../failure';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.scss']
})
export class FailureComponent implements OnInit {

  failureList: Failure[];
  clickMessage = '';

  constructor(private failureService: FailureService/*, router: RouterLink*/) { }

  ngOnInit() {
    this.failureService.getFailures().subscribe(data => {
      this.failureList = data;
    });
  }

  launchSimulation() {
    if (this.clickMessage == 'La simulation se lance!') {
      this.clickMessage = 'Cliquer une fois ça suffit vous savez';
    }
    if (this.clickMessage == '') {
      this.clickMessage = 'La simulation se lance!';
    }
  }

}
