import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { corsiProva } from '../Interfacce/corsiProva';
import {FormBuilder} from '@angular/forms';

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
    console.log("sono qui");
    if (!this.categorieScelte.includes(event.target.value)){
      this.categorieScelte.push(event.target.value);
      console.log(event.target.value);
    }
  }

  nuovoMetodo(){
    console.log("prova prova");
  }

  // ------------- Material CHIPS -------------------
  selectable = true;
  removable = true;
  remove(cat: String): void {
    const index = this.categorieScelte.indexOf(cat);

    if (index >= 0) {
      this.categorieScelte.splice(index, 1);
    }
  }
  // ------------ fine Material CHIPS --------------
  
  advancedSearchDisplay = false;
  
  toggleAdvancedSearch(event: any) {
    
    let advancedSearch = document.querySelector('.prova-grid')!;
    let freccina = event.target;

    if(this.advancedSearchDisplay){
      advancedSearch.classList.remove("height-full");
      advancedSearch.classList.add("height-zero");
      freccina.classList = "fas fa-chevron-down";
      this.advancedSearchDisplay = false;
    } 
    else if(!this.advancedSearchDisplay){
      advancedSearch.classList.remove("height-zero");
      advancedSearch.classList.add("height-full");
      freccina.classList = "fas fa-chevron-up";
      this.advancedSearchDisplay = true;    
   }
   

  }
}
