import { TestBed } from '@angular/core/testing';

import { CoffeeMachineService } from './coffee-machine.service';

describe('CoffeeMachineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeMachineService = TestBed.get(CoffeeMachineService);
    expect(service).toBeTruthy();
  });
});
