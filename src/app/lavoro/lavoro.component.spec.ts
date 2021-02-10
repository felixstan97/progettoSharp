import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavoroComponent } from './lavoro.component';

describe('LavoroComponent', () => {
  let component: LavoroComponent;
  let fixture: ComponentFixture<LavoroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavoroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
