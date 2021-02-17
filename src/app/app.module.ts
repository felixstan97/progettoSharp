import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    path:"profilo",
    loadChildren: () => import('./profilo/profilo.module').then(m => m.ProfiloModule)
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
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
