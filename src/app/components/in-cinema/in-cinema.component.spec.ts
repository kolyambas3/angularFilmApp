import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InCinemaComponent } from './in-cinema.component';

describe('InCinemaComponent', () => {
  let component: InCinemaComponent;
  let fixture: ComponentFixture<InCinemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InCinemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
