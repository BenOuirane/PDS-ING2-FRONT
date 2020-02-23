import { TestBed } from '@angular/core/testing';

import { CoffeeMachineHistoryService } from './coffee-machine-history.service';

describe('CoffeeMachineHistoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeMachineHistoryService = TestBed.get(CoffeeMachineHistoryService);
    expect(service).toBeTruthy();
  });
});
