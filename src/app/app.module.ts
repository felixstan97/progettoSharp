import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

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
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
