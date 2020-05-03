import { Component, OnInit } from '@angular/core';
import {ProgressWebsocketService} from "../services/progress-websocket.service";

@Component({
  selector: 'app-health-alert',
  templateUrl: './health-alert.component.html',
  styleUrls: ['./health-alert.component.scss']
})
export class HealthAlertComponent implements OnInit {


  title = 'Health Alert';
  public progress: any = {};
  isShow = false;


  constructor(private progressWebsocketService: ProgressWebsocketService) { }

  ngOnInit() {
    this.initProgressWebSocket();
  }

  /**
   * Subscribe to the client broker.
   * Return the current status of the batch.
   */
  private initProgressWebSocket = () => {
    const obs = this.progressWebsocketService.getObservable();

    obs.subscribe({
      next: this.onNewProgressMsg,
      error: err => {
        console.log(err);
      }
    });
  }

  /**
   * Apply result of the java server notification to the view.
   */
  private onNewProgressMsg = receivedMsg => {
    if (receivedMsg.type === 'SUCCESS') {
      this.isShow = false;
      this.progress = receivedMsg.message;

    }
  }


  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
