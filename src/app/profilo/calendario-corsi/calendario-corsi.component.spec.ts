import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCorsiComponent } from './calendario-corsi.component';

describe('CalendarioCorsiComponent', () => {
  let component: CalendarioCorsiComponent;
  let fixture: ComponentFixture<CalendarioCorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioCorsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
