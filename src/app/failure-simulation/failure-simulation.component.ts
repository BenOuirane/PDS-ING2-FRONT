import { Component, OnInit } from '@angular/core';
import { Failure } from '../Failure';
import { FailureService } from '../services/failure.service';

@Component({
  selector: 'app-failure-simulation',
  templateUrl: './failure-simulation.component.html',
  styleUrls: ['./failure-simulation.component.scss']
})
export class FailureSimulationComponent implements OnInit {



  failureList: Failure[];
  clickMessage = '';

  constructor(private failureService: FailureService) { }

  ngOnInit() {
    this.failureService.launchSimulation().subscribe(data => {
      this.failureList = data;
    });
  }



}