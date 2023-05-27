import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { SrcsetDirective } from './srcset.directive';

@NgModule({
  declarations: [
    TitleComponent,
    SrcsetDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    SrcsetDirective
  ]
})
export class SharedModule { }
