import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology/technology.component';
import { HomeComponent } from './home/home/home.component';
import { DestinationComponent } from './destination/destination/destination.component';
import { CrewComponent } from './crew/crew/crew.component';

// Dummy component for testing purposes
@Component({
  selector: 'app-dummy',
  template: `<p>dummy works!</p>`
})
export class DummyComponent { }

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: '**', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
