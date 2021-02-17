import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliCorsoComponent } from './dettagli-corso.component';

describe('DettagliCorsoComponent', () => {
  let component: DettagliCorsoComponent;
  let fixture: ComponentFixture<DettagliCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliCorsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
