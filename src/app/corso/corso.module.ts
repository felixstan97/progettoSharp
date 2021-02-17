import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './corso.component';
import { DettagliCorsoComponent } from '../dettagli-corso/dettagli-corso.component';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 


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
    RouterModule.forChild(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class CorsoModule { }
