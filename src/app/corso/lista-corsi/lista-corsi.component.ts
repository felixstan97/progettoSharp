import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { corsiProva } from 'src/app/Interfacce/corsiProva';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss']
})
export class ListaCorsiComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  corsi = corsiProva;

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }

}
