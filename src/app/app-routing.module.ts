import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { TechnologyComponent } from './technology/technology/technology.component';
import { HomeComponent } from './home/home/home.component';
import { DestinationComponent } from './destination/destination/destination.component';
import { CrewComponent } from './crew/crew/crew.component';
import { MainTitleStrategy } from './main-title-strategy.service';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  {
    path: 'destination',
    component: DestinationComponent,
    title: 'Destination'
  },
  { path: 'crew', component: CrewComponent, title: 'Crew' },
  { path: 'technology', component: TechnologyComponent, title: 'Technology' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: MainTitleStrategy }
  ]
})
export class AppRoutingModule { }
