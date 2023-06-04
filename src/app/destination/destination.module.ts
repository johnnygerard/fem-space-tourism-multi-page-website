import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { SELECTION_TOKEN, SelectionService } from '../selection.service';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    HeroComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DescriptionComponent
  ],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e3 } }
  ]
})
export class DestinationModule { }
