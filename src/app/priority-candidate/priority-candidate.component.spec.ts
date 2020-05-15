import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityCandidateComponent } from './priority-candidate.component';

describe('PriorityCandidateComponent', () => {
  let component: PriorityCandidateComponent;
  let fixture: ComponentFixture<PriorityCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
