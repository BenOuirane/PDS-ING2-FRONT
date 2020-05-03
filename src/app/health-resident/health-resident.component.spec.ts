import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthResidentComponent } from './health-resident.component';

describe('HealthResidentComponent', () => {
  let component: HealthResidentComponent;
  let fixture: ComponentFixture<HealthResidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthResidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
