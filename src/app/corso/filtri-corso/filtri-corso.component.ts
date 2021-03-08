import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { corsiProva } from 'src/app/Interfacce/corsiProva';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-filtri-corso',
  templateUrl: './filtri-corso.component.html',
  styleUrls: ['./filtri-corso.component.scss']
})
export class FiltriCorsoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sharedService:SharedService) { }

  searchString ="";
  rice="";
  
  ngOnInit(): void {
    this.generaFiltri();
    let r = this.route.snapshot.queryParams.searchString;
    if(r){
      this.rice = r;
    }
    // this.searchString = this.route.snapshot.queryParams.searchString;
    // this.rice = this.searchString;
    // if(searchString) {
    //   let input = document.querySelector(".barra-ricerca input");

    //   // input.value() = searchString;
    // }
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


  onSubmit(event:any){
    
    let pacchetto = {
      keywords : event.target.ricerca.value,
      price : event.target.prezzo.value,
      categories : this.categorieScelte,
      cert : event.target.certificazione.value,
      minDur : event.target.durataMin.value,
      maxDur : event.target.durataMax.value
    }
   
   
    
    if(event.target.durataMin.value > event.target.durataMax.value){
      event.target.durataMax.classList.add('red-border');
      event.target.durataMin.classList.add('red-border');
      return;
    } else {
      event.target.durataMax.classList.remove('red-border');
      event.target.durataMin.classList.remove('red-border');
    }
  
    this.sharedService.search(pacchetto);
  }

}
