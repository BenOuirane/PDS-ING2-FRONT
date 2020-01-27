import { TestBed } from '@angular/core/testing';

import { LampeService } from './lampe.service';

describe('LampeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LampeService = TestBed.get(LampeService);
    expect(service).toBeTruthy();
  });
});
