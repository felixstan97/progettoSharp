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

  constructor(private router : Router, private sharedService:SharedService) { 
    this.subscription = this.sharedService.getSearch().subscribe(pacchetto =>{
      if(!pacchetto){
        console.log('Errore, il pacchetto contenente i filtri per la ricerca non è stato elaborato o ricevuto')
      } else {
        this.filtra(pacchetto)
      }
    })

  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  corsi = corsiProva;

  mostraDettagli(id:number) {
    this.router.navigate(['corso/dettagli/'+id]);
    window.scroll(0,0);
  }

  corsiRisultati : Corso[] = [];

  filtra(pacchetto:any){
    corsiProva.forEach(element => {

      if(element.titolo.includes(pacchetto.keywords)){

        if(pacchetto.cert == '*'
            || (pacchetto.cert == '0' && element.certificazione == false)
            || (pacchetto.cert == '1' && element.certificazione == true)){
          this.corsiRisultati.push(element)
        } else if(pacchetto.price == '*'
            || (pacchetto.price == '0' && element.costo == 0)
            || (pacchetto.price == '1' && element.costo > 0)){
          this.corsiRisultati.push(element)
        }
      }

    });
    this.corsi = this.corsiRisultati;
    this.corsiRisultati = [];
  }

}
