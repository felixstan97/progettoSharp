import { Component, OnInit } from '@angular/core';
import { utenteProva } from '../../Interfacce/utenteProva';

@Component({
  selector: 'app-info-personali',
  templateUrl: './info-personali.component.html',
  styleUrls: ['./info-personali.component.scss']
})
export class InfoPersonaliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  utente = utenteProva;


}
