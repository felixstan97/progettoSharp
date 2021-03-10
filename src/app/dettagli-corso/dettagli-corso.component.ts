import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { corsiProva } from '../Interfacce/corsiProva';
import { Corso } from '../Interfacce/Corso';

@Component({
  selector: 'app-dettagli-corso',
  templateUrl: './dettagli-corso.component.html',
  styleUrls: ['./dettagli-corso.component.scss']
})
export class DettagliCorsoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCorso();
  }

  corso! : Corso;
  
  getCorso(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // this.corso = corsiProva[id-1];
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }


}
