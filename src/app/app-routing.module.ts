import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: 'technology', component: DummyComponent },
  { path: '**', component: DummyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
