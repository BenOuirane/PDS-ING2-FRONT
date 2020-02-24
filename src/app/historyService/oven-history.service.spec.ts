import { TestBed } from '@angular/core/testing';

import { OvenHistoryService } from './oven-history.service';

describe('OvenHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvenHistoryService = TestBed.get(OvenHistoryService);
    expect(service).toBeTruthy();
  });
});
