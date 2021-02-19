import { NgModule } from '@angular/core';
import { ProfiloComponent } from './profilo.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CalendarioCorsiComponent } from './calendario-corsi/calendario-corsi.component';
import { InfoPersonaliComponent } from './info-personali/info-personali.component';
import { IMieiCorsiComponent } from './i-miei-corsi/i-miei-corsi.component';
import { LeMieCompetenzeComponent } from './le-mie-competenze/le-mie-competenze.component';

const routes : Routes = [
  {
    path:"",
    component: ProfiloComponent
  }
]

@NgModule({
  declarations: [
    ProfiloComponent,
    CalendarioCorsiComponent,
    InfoPersonaliComponent,
    IMieiCorsiComponent,
    LeMieCompetenzeComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CalendarioCorsiComponent,
    InfoPersonaliComponent,
    IMieiCorsiComponent,
    LeMieCompetenzeComponent,
  ]
})

export class ProfiloModule { }
