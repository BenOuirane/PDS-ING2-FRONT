import { TestBed } from '@angular/core/testing';

import { OvenService } from './oven.service';

describe('OvenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvenService = TestBed.get(OvenService);
    expect(service).toBeTruthy();
  });
});
