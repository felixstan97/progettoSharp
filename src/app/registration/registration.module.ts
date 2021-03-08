import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {
    path:"",
    component: RegistrationComponent
  }
]

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
