import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { SelectorComponent } from './selector/selector.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { SharedModule } from '../shared/shared.module';
import { TechnologyComponent } from './technology/technology.component';

@NgModule({
  declarations: [
    HeroComponent,
    SelectorComponent,
    TerminologyComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [TechnologyComponent]
})
export class TechnologyModule { }
