import { NgModule } from '@angular/core';

//Routing definitions happen here and require the routing modules below as well as the components to be routed-to
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id' , component: HeroDetailComponent },

];

@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  
  exports: [ RouterModule ]
 
})
export class AppRoutingModule { }
