import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContattiComponent } from './form-contatti.component';

describe('FormContattiComponent', () => {
  let component: FormContattiComponent;
  let fixture: ComponentFixture<FormContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
