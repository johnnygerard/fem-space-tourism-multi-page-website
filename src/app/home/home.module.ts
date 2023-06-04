import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { ExploreComponent } from './explore/explore.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    IntroComponent,
    ExploreComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExploreComponent
  ]
})
export class HomeModule { }
