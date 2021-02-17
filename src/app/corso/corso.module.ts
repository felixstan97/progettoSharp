import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './corso.component';
import { DettagliCorsoComponent } from '../dettagli-corso/dettagli-corso.component';

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
    DettagliCorsoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CorsoModule { }
