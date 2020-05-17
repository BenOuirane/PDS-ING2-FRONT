import { Injectable } from '@angular/core';

import { InjectableRxStompConfig, RxStompService } from '@stomp/ng2-stompjs';
import {FixedStompConfig} from "../health-model/FixedStompConfig";
import {WebSocketOptions} from "../health-model";
import {WebsocketService} from "./websocket.service";


export const progressStompConfig: FixedStompConfig = {
  webSocketFactory: () => {
    return new WebSocket('ws://localhost:8080/stomp');
  }
};

@Injectable()
export class ProgressWebsocketService extends WebsocketService {
  constructor(stompService: RxStompService) {
    super(stompService, progressStompConfig, new WebSocketOptions('/topic/progress'));
  }
}
