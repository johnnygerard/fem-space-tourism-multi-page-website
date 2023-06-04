import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { SELECTION_TOKEN, SelectionService } from '../selection.service';
import { DescriptionComponent } from './description/description.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    HeroComponent,
    DescriptionComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SelectorComponent
  ],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e3 } }
  ]
})
export class DestinationModule { }
