import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { DescriptionComponent } from './description/description.component';
import { SelectorComponent } from './selector/selector.component';
import { DestinationComponent } from './destination/destination.component';

@NgModule({
  declarations: [
    HeroComponent,
    DescriptionComponent,
    SelectorComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DestinationComponent
  ],
})
export class DestinationModule { }
