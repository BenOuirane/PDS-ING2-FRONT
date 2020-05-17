import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDatamockComponent } from './update-datamock.component';

describe('UpdateDatamockComponent', () => {
  let component: UpdateDatamockComponent;
  let fixture: ComponentFixture<UpdateDatamockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDatamockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDatamockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
