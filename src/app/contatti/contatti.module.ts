import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from './contatti.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path:"",
    component: ContattiComponent
  }
]

@NgModule({
  declarations: [ContattiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContattiModule { }
