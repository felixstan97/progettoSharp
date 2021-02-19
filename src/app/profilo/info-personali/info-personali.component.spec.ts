import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPersonaliComponent } from './info-personali.component';

describe('InfoPersonaliComponent', () => {
  let component: InfoPersonaliComponent;
  let fixture: ComponentFixture<InfoPersonaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPersonaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPersonaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
