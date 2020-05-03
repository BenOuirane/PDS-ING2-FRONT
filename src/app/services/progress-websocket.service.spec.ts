import { TestBed } from '@angular/core/testing';

import { ProgressWebsocketService } from './progress-websocket.service';

describe('ProgressWebsocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgressWebsocketService = TestBed.get(ProgressWebsocketService);
    expect(service).toBeTruthy();
  });
});
