import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { SelectorComponent } from './selector/selector.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { SharedModule } from '../shared/shared.module';
import { TechnologyComponent } from './technology/technology.component';
import { SELECTION_TOKEN, SelectionService } from '../selection.service';

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
  exports: [TechnologyComponent],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 3, interval: 1e4 } }
  ]
})
export class TechnologyModule { }
