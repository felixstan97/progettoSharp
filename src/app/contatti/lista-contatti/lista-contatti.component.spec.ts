import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContattiComponent } from './lista-contatti.component';

describe('ListaContattiComponent', () => {
  let component: ListaContattiComponent;
  let fixture: ComponentFixture<ListaContattiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaContattiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaContattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
