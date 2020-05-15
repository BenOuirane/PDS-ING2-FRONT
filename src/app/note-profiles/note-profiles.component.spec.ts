import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteProfilesComponent } from './note-profiles.component';

describe('NoteProfilesComponent', () => {
  let component: NoteProfilesComponent;
  let fixture: ComponentFixture<NoteProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
