import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IscrizioniComponent } from './iscrizioni.component';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {
    path:"",
    component: IscrizioniComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class IscrizioniModule { }
