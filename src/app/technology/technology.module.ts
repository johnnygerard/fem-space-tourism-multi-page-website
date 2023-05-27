import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { SelectorComponent } from './selector/selector.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeroComponent,
    SelectorComponent,
    TerminologyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TechnologyModule { }
