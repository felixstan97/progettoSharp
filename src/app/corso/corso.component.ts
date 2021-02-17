import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { corsiProva } from '../Interfacce/corsiProva';
// import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.scss']
})
export class CorsoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }

  onSubmit(){
  }

  corsi = corsiProva;

  

}
