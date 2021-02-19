import { Component, OnInit } from '@angular/core';
import { utenteProva } from '../../Interfacce/utenteProva';

@Component({
  selector: 'app-i-miei-corsi',
  templateUrl: './i-miei-corsi.component.html',
  styleUrls: ['./i-miei-corsi.component.scss']
})
export class IMieiCorsiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  utente = utenteProva;


}
