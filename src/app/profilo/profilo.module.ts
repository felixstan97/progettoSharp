import { NgModule } from '@angular/core';
import { ProfiloComponent } from './profilo.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class ProfiloModule { }
