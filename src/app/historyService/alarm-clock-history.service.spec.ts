import { TestBed } from '@angular/core/testing';

import { AlarmClockHistoryService } from './alarm-clock-history.service';

describe('AlarmClockHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlarmClockHistoryService = TestBed.get(AlarmClockHistoryService);
    expect(service).toBeTruthy();
  });
});
