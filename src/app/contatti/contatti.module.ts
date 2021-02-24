import { NgModule } from '@angular/core';
import { ContattiComponent } from './contatti.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ListaContattiComponent } from './lista-contatti/lista-contatti.component';
import { FormContattiComponent } from './form-contatti/form-contatti.component';

const routes : Routes = [
  {
    path:"",
    component: ContattiComponent
  }
]

@NgModule({
  declarations: [
    ContattiComponent,
    ListaContattiComponent,
    FormContattiComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [ListaContattiComponent, FormContattiComponent]
})
export class ContattiModule { }
