import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CorsoComponent } from './corso.component';

const routes : Routes = [
  {
    path:"",
    component: CorsoComponent
  }
]

@NgModule({
  declarations: [CorsoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CorsoModule { }
