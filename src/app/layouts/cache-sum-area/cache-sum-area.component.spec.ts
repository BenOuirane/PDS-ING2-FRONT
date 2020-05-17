import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheSumAreaComponent } from './cache-sum-area.component';

describe('CacheSumAreaComponent', () => {
  let component: CacheSumAreaComponent;
  let fixture: ComponentFixture<CacheSumAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheSumAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheSumAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
