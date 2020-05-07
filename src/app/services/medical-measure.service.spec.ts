import { TestBed } from '@angular/core/testing';

import { MedicalMeasureService } from './medical-measure.service';

describe('MedicalMeasureService', () => {
  let service: MedicalMeasureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalMeasureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
