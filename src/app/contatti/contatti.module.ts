import { NgModule } from '@angular/core';
import { ContattiComponent } from './contatti.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path:"",
    component: ContattiComponent
  }
]

@NgModule({
  declarations: [ContattiComponent],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ContattiModule { }
