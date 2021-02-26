import { Component, OnInit } from '@angular/core';
import { corsiProva } from 'src/app/Interfacce/corsiProva';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filtri-corso',
  templateUrl: './filtri-corso.component.html',
  styleUrls: ['./filtri-corso.component.scss']
})
export class FiltriCorsoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generaFiltri();
  }

  corsi = corsiProva;

  minDurata = this.findMinDuration();

  findMinDuration(){
    if(this.corsi.length == 0) {
      return 0;
    } else { 
      let duration = this.corsi[0].durata;
      this.corsi.forEach(corso=>{
        if(corso.durata < duration) {
          duration = corso.durata;
        }
      })
      return duration;
    }
  }

  maxDurata = this.findMaxDuration();

  findMaxDuration(){
    if(this.corsi.length == 0) {
      return 0;
    } else { 
      let duration = this.corsi[0].durata;
      this.corsi.forEach(corso=>{
        if(corso.durata > duration) {
          duration = corso.durata;
        }
      })
      return duration;
    }
  }


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
    if(event.target.value == "*") return;
    if (!this.categorieScelte.includes(event.target.value)){
      this.categorieScelte.push(event.target.value);
    }
    event.target.value = "*";
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

  onSubmit(){
    console.log("ciao");
  }

}
