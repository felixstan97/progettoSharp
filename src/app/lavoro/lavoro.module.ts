import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LavoroComponent } from './lavoro.component';

const routes : Routes = [
  {
    path:"",
    component: LavoroComponent
  }
]

@NgModule({
  declarations: [LavoroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LavoroModule { }
