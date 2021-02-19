import { NgModule } from '@angular/core';
import { ContattiComponent } from './contatti.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {
    path:"",
    component: ContattiComponent
  }
]

@NgModule({
  declarations: [ContattiComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContattiModule { }
