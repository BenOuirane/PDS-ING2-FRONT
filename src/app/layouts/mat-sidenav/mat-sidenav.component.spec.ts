import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSidNavComponent } from './mat-sidenav.component';

describe('MatSidenavComponent', () => {
  let component: MatSidNavComponent;
  let fixture: ComponentFixture<MatSidNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatSidNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSidNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
