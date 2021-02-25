import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorsiComponent } from './lista-corsi.component';

describe('ListaCorsiComponent', () => {
  let component: ListaCorsiComponent;
  let fixture: ComponentFixture<ListaCorsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCorsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
