import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltriCorsoComponent } from './filtri-corso.component';

describe('FiltriCorsoComponent', () => {
  let component: FiltriCorsoComponent;
  let fixture: ComponentFixture<FiltriCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltriCorsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltriCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
