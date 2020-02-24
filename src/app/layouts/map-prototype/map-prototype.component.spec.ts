import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPrototypeComponent } from './map-prototype.component';

describe('MapPrototypeComponent', () => {
  let component: MapPrototypeComponent;
  let fixture: ComponentFixture<MapPrototypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapPrototypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapPrototypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
