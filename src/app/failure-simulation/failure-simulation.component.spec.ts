import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureSimulationComponent } from './failure-simulation.component';

describe('FailureSimulationComponent', () => {
  let component: FailureSimulationComponent;
  let fixture: ComponentFixture<FailureSimulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FailureSimulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FailureSimulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
