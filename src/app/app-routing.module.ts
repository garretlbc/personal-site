import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ObservationsComponent } from './observations/observations.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { StudioComponent } from './studio/studio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'portraits', component:  PortraitsComponent},
  { path: 'observations', component:  ObservationsComponent},
  { path: 'studio', component:  StudioComponent},
  { path: 'about', component:  AboutComponent},
  { path: '**', component:  AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

