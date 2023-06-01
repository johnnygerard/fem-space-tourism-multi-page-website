import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector/selector.component';
import { SELECTION_TOKEN, SelectionService } from '../selection.service';



@NgModule({
  declarations: [
    SelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectorComponent
  ],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e3 } }
  ]
})
export class CrewModule { }
