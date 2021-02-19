import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMieiCorsiComponent } from './i-miei-corsi.component';

describe('IMieiCorsiComponent', () => {
  let component: IMieiCorsiComponent;
  let fixture: ComponentFixture<IMieiCorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMieiCorsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IMieiCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
