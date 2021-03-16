import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './corso.component';
import { DettagliCorsoComponent, Iscrizioni } from '../dettagli-corso/dettagli-corso.component';
import { SharedModule } from '../shared/shared.module';
import { FiltriCorsoComponent } from './filtri-corso/filtri-corso.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';


const routes : Routes = [
  {
    path:"",
    component: CorsoComponent
  },
  {
    path:"dettagli/:id",
    component: DettagliCorsoComponent
  }

]

@NgModule({
  declarations: [
    CorsoComponent,
    FiltriCorsoComponent,
    ListaCorsiComponent,
    DettagliCorsoComponent,
    Iscrizioni
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FiltriCorsoComponent,
    ListaCorsiComponent
  ]

})
export class CorsoModule { }
