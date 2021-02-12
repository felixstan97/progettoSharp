import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"lavoro",
    loadChildren: () => import('./lavoro/lavoro.module').then(m => m.LavoroModule)
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
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
