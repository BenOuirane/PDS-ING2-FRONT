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

  failureList = new Observable<Array<Failure>>();

  constructor(private failureService: FailureService/*, router: RouterLink*/) { }

  ngOnInit() {
    this.failureList = this.failureService.getFailures();
  }

}
