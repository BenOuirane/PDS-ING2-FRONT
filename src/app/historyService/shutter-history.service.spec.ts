import { TestBed } from '@angular/core/testing';

import { ShutterHistoryService } from './shutter-history.service';

describe('ShutterHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShutterHistoryService = TestBed.get(ShutterHistoryService);
    expect(service).toBeTruthy();
  });
});
