import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAreaDetailComponent } from './current-area-detail.component';

describe('CurrentAreaDetailComponent', () => {
  let component: CurrentAreaDetailComponent;
  let fixture: ComponentFixture<CurrentAreaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAreaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
