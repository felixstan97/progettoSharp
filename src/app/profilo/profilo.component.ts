import { Component, OnInit } from '@angular/core';
import { utenteProva } from '../utenteProva';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.utente);
  }

  utente = utenteProva;


}
