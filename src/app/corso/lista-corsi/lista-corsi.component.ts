import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { corsiProva } from 'src/app/Interfacce/corsiProva';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';
import { Corso } from 'src/app/Interfacce/Corso';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss']
})
export class ListaCorsiComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  subscriptionFromHome:Subscription;

  constructor(private router : Router, private sharedService:SharedService) { 
    this.subscription = this.sharedService.getSearch().subscribe(pacchetto =>{
      console.log("dentro la subscriptions")
      if(!pacchetto){
        console.log('Errore, il pacchetto contenente i filtri per la ricerca non è stato elaborato o ricevuto')
      } else {
        console.log("prima subscription-")
        this.filtra(pacchetto);
      }
    })
    console.log("-----")
    this.subscriptionFromHome = this.sharedService.getHomeSearch().subscribe(parolaChiave =>{
      console.log("seconda subscription-")
      console.log("SOPRA- ");
      console.log(parolaChiave);
      console.log("SOTTO- ");
      this.filtraHome(parolaChiave);
     })
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscriptionFromHome.unsubscribe();
  }

  ngOnInit(): void {
  }

  corsi = corsiProva;

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }

  
  filtra(pacchetto:any){
    let corsiRisultati : Corso[] = [];
    corsiProva.forEach(element => {

      if(element.titolo.includes(pacchetto.keywords)){

        if(pacchetto.cert == '*'
            || (pacchetto.cert == '0' && element.certificazione == false)
            || (pacchetto.cert == '1' && element.certificazione == true)){

              if(pacchetto.price == '*'
                || (pacchetto.price == '0' && element.costo == 0)
                || (pacchetto.price == '1' && element.costo > 0)){

                  if((pacchetto.categories.length == 0) 
                    || pacchetto.categories.includes(element.categoria)){
                   
                    if(pacchetto.minDur <= element.durata && pacchetto.maxDur >= element.durata){
                      corsiRisultati.push(element)
                      console.log("fine filtro - dentro il filtro")
                    }
                  }
              }
        }
      }
    });
    this.corsi = corsiRisultati;
  }

  filtraHome(keyWordHome:string){
    // this.corsi = corsiProva;
    let corsiRisultati : Corso[] = [];
    console.log("STRINGA")
    console.log(keyWordHome)
    corsiProva.forEach(element => {

        if(element.titolo.includes(keyWordHome)){
          console.log("Hola")
          console.log(element.titolo)
          corsiRisultati.push(element);
        }
      }
    );
    this.corsi = corsiRisultati;
  }

}
