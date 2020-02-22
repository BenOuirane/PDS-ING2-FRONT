import { TestBed } from '@angular/core/testing';

import { LampHistoryService } from './lamp-history.service';

describe('LampHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LampHistoryService = TestBed.get(LampHistoryService);
    expect(service).toBeTruthy();
  });
});
