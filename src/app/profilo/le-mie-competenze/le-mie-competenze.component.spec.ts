import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeMieCompetenzeComponent } from './le-mie-competenze.component';

describe('LeMieCompetenzeComponent', () => {
  let component: LeMieCompetenzeComponent;
  let fixture: ComponentFixture<LeMieCompetenzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeMieCompetenzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeMieCompetenzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
