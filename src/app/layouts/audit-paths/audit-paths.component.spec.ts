import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditPathsComponent } from './audit-paths.component';

describe('AuditPathsComponent', () => {
  let component: AuditPathsComponent;
  let fixture: ComponentFixture<AuditPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
