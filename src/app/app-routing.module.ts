import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology/technology.component';

// Dummy component for testing purposes
@Component({
  selector: 'app-dummy',
  template: `<p>dummy works!</p>`
})
export class DummyComponent { }

const routes: Routes = [
  { path: '', component: DummyComponent },
  { path: 'destination', component: DummyComponent },
  { path: 'crew', component: DummyComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: '**', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
