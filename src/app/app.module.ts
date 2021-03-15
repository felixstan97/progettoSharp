import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule} from '@angular/common/http';
import { IscrizioniComponent } from './iscrizioni/iscrizioni.component';



const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"corso",
    loadChildren: () => import('./corso/corso.module').then(m => m.CorsoModule)
  },
  {
    path:"contatti",
    loadChildren: () => import('./contatti/contatti.module').then(m => m.ContattiModule)
  },
  {
    path:"profilo",
    loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule)
  },
  {
    path:"iscriviti",
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path:"iscrizioni",
    loadChildren: () => import('./iscrizioni/iscrizioni.module').then(m => m.IscrizioniModule)
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IscrizioniComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
