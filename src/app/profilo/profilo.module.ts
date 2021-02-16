import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiloComponent } from './profilo.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:"",
    component: ProfiloComponent
  }
]

@NgModule({
  declarations: [
    ProfiloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ProfiloModule { }
