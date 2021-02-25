import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Interfacce/contact';

@Component({
  selector: 'app-lista-contatti',
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.scss']
})
export class ListaContattiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contatti : Contact[] = [
    {class: 'fas fa-phone', type:'Telefono', text: '56464214679'},
    {class: 'fas fa-map-marker-alt', type:'Indirizzo', text: 'Piazza della Vittoria, 50 - 38349 Padova'},
    {class: 'fas fa-at', type:'E-Mail', text: 'info@lavorosharp.it'},
    {class: 'fas fa-key', type:'PEC', text: 'lavorosharp@pec.it'}
  ]

}
