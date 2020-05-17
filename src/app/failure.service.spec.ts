import { TestBed } from '@angular/core/testing';

import { FailureService } from './failure.service';

describe('FailureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FailureService = TestBed.get(FailureService);
    expect(service).toBeTruthy();
  });
});
