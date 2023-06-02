import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { HeroComponent } from './hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { BioComponent } from './bio/bio.component';
import { CrewComponent } from './crew/crew.component';

@NgModule({
  declarations: [
    SelectorComponent,
    HeroComponent,
    BioComponent,
    CrewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CrewComponent
  ],
})
export class CrewModule { }
