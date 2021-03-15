import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/Interfacce/Corso';
import { PacchettoRicercaCorsi } from 'src/app/Interfacce/Pacchetto';
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
    
    let pacchetto:PacchettoRicercaCorsi ={ };

    if(event.target.ricerca.value){
      pacchetto.titleLike = event.target.ricerca.value;
    }
    if(event.target.prezzo.value){
      pacchetto.hasPrice = !! event.target.prezzo.value;
    }
    if(this.categorieScelte[0]){
      pacchetto.category = this.categorieScelte[0];
    }
    if(event.target.certificazione.value){
      // if(event.target.certificazione.value == "false"){
      //   pacchetto.cert = false;
      // }else {
      //   pacchetto.cert = true;
      // }
      pacchetto.cert = event.target.certificazione.value == "true"
    }
    if(event.target.durataMin.value){
      pacchetto.minDur = + event.target.durataMin.value;
    }
    if(event.target.durataMax.value){
      pacchetto.maxDur = + event.target.durataMax.value;
    }

    console.log("-------")
    console.log(pacchetto)
    console.log("-------")

    if(event.target.durataMin.value > event.target.durataMax.value){
      event.target.durataMax.classList.add('red-border');
      event.target.durataMin.classList.add('red-border');
      return;
    } else {
      event.target.durataMax.classList.remove('red-border');
      event.target.durataMin.classList.remove('red-border');
    }
    this.courseService.searchCourse(pacchetto);




    // this.sharedService.search(pacchetto);
    // this.courseService.getElemetiFiltrati(pacchetto);
    // console.log(pacchetto);
   
    // console.log(pacchetto);
  }

}
