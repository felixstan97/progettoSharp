import { Component, OnInit } from '@angular/core';
import { utenteProva } from '../Interfacce/utenteProva';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  utente = utenteProva;


}
