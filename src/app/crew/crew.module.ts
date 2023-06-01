import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { SELECTION_TOKEN, SelectionService } from '../selection.service';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { BioComponent } from './bio/bio.component';



@NgModule({
  declarations: [
    SelectorComponent,
    HeroComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BioComponent
  ],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e3 } }
  ]
})
export class CrewModule { }
