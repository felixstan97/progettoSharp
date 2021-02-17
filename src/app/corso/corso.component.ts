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
    this.generaFiltri();
  }

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }

  onSubmit(){
  }

  corsi = corsiProva;

  categorie : String[] = [];
  durate : String[] = [
    "< 100 ore",
    "100 - 300 ore",
    "400 - 600 ore",
    "> 600 ore"
  ];

  generaFiltri(){
    for (let corso of this.corsi){
      if (!this.categorie.includes(corso.categoria)){
        this.categorie.push(corso.categoria);
      }
    }
    this.categorie.sort();
  }

  categorieScelte : String[] = [];

  scegliCategoria(event:any) {
    if (!this.categorieScelte.includes(event.target.value)){
      this.categorieScelte.push(event.target.value);
    }
    console.log(this.categorieScelte);
  }


  // ----------- Material CHIPS -------------------
  // visible = true;
  selectable = true;
  removable = true;
  // addOnBlur = true;
  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.fruits.push({name: value.trim()});
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  remove(cat: String): void {
    const index = this.categorieScelte.indexOf(cat);

    if (index >= 0) {
      this.categorieScelte.splice(index, 1);
    }
  }
  

}
