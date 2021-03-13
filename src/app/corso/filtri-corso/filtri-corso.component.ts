import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/Interfacce/Corso';
import { CourseService } from 'src/app/shared/course.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-filtri-corso',
  templateUrl: './filtri-corso.component.html',
  styleUrls: ['./filtri-corso.component.scss']
})
export class FiltriCorsoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private sharedService:SharedService,
              private courseService:CourseService) { 
              }

  subscription!:Subscription;
  searchString ="";
  rice="";
  corsi:Corso[] = [];
  minDurata = 0;
  maxDurata = 0;
  advancedSearchDisplay = false;
  categorie : String[] = [];
  categorieScelte : String[] = [];
  
  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: cs => {
                  this.corsi = cs
                  this.generaFiltri()
                },
      error: err => console.log(err)
    })

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

  findMinDuration(){
    if(this.corsi.length == 0) {
      return 0;
    } else { 
      let duration = this.corsi[0].duration;
      this.corsi.forEach(corso=>{
        if(corso.duration < duration) {
          duration = corso.duration;
        }
      })
      return duration;
    }
  }

  findMaxDuration(){
    if(this.corsi.length == 0) {
      return 0;
    } else { 
      let duration = this.corsi[0].duration;
      this.corsi.forEach(corso=>{
        if(corso.duration > duration) {
          duration = corso.duration;
        }
      })
      return duration;
    }
  }

  generaFiltri(){
    for (let corso of this.corsi){
      if (!this.categorie.includes(corso.category)){
        this.categorie.push(corso.category);
      }
    }
    this.categorie.sort();
    this.minDurata = this.findMinDuration();
    this.maxDurata = this.findMaxDuration();
  }

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
  // ------------- Material CHIPS -------------------
  
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
      titleLike : event.target.ricerca.value? event.target.ricerca.value : null,
      hasPrice : event.target.prezzo.value ? event.target.prezzo.value : null,
      category : this.categorieScelte[0]? event.target.categorieScelte[0] : null,
      cert : event.target.certificazione.value? event.target.certificazione.value : null,
      minDur : event.target.durataMin.value? event.target.durataMin.value : null,
      maxDur : event.target.durataMax.value? event.target.durataMax.value : null
    }
    
    if(event.target.durataMin.value > event.target.durataMax.value){
      event.target.durataMax.classList.add('red-border');
      event.target.durataMin.classList.add('red-border');
      return;
    } else {
      event.target.durataMax.classList.remove('red-border');
      event.target.durataMin.classList.remove('red-border');
    }
  
    // this.sharedService.search(pacchetto);
    // this.courseService.getElemetiFiltrati(pacchetto);
    console.log(pacchetto);
    this.courseService.searchCourse(pacchetto);
    // console.log(pacchetto);
  }

}
