import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { corsiProva } from 'src/app/Interfacce/corsiProva';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/Interfacce/Corso';
// import { CoreServiceService } from '../../shared/course-service.service'
import { CourseService } from '../../shared/course.service'
import { PacchettoRicercaCorsi } from 'src/app/Interfacce/Pacchetto';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss']
})
export class ListaCorsiComponent implements OnInit, OnDestroy {
  subscription:Subscription;

  corsi:Corso[] = [];

  constructor(private route: ActivatedRoute, private router : Router,
                private sharedService:SharedService,
                private courseService:CourseService) { 
    this.subscription = this.sharedService.getSearch().subscribe(pacchetto =>{
      if(!pacchetto){
        console.log('Errore, il pacchetto contenente i filtri per la ricerca non è stato elaborato o ricevuto')
      } else {
        this.filtra(pacchetto);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // let searchString = this.route.snapshot.queryParams.searchString;
    // if(searchString) {
    //   this.filtraHome(searchString);
    // }
    let pacchetto : PacchettoRicercaCorsi = {minDur:0,maxDur:10000};
    this.courseService.searchCourse(pacchetto);
    this.courseService.getCourseSearch().subscribe({
      next: cs => this.corsi = cs,
      error: err => console.log(err)
    })
  }

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }
  
  filtra(pacchetto:any){
    
  }


  filtraHome(keyWordHome:string){
    // this.router.navigate(['corso']);
    // let corsiRisultati : Corso[] = [];
    // corsiProva.forEach(element => {

    //     if(element.name.toLowerCase().includes(keyWordHome.toLowerCase())){
    //       corsiRisultati.push(element);
    //     }
    //   }
    // );
    // this.corsi = corsiRisultati;
  }

}


// ESEMPIO DI FILTRAGGIO FRONTEND

// let corsiRisultati : Corso[] = [];
    // corsiProva.forEach(element => {

    //   if(element.name.toLowerCase().includes(pacchetto.keywords.toLowerCase())){

    //     if(pacchetto.cert == '*'
    //         || (pacchetto.cert == '0' && element.certification == false)
    //         || (pacchetto.cert == '1' && element.certification == true)){

    //           if(pacchetto.price == '*'
    //             || (pacchetto.price == '0' && element.price == 0)
    //             || (pacchetto.price == '1' && element.price > 0)){

    //               if((pacchetto.categories.length == 0) 
    //                 || pacchetto.categories.includes(element.category)){
                   
    //                 if(pacchetto.minDur <= element.duration && pacchetto.maxDur >= element.duration){
    //                   corsiRisultati.push(element)
    //                 }
    //               }
    //           }
    //     }
    //   }
    // });
    // this.corsi = corsiRisultati;