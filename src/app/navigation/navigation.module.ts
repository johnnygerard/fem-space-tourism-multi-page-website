import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MobileComponent } from './mobile/mobile.component';
import { LogoSvgComponent } from './svg/logo-svg.component';
import { MenuSvgComponent } from './svg/menu-svg.component';
import { CloseSvgComponent } from './svg/close-svg.component';

@NgModule({
  declarations: [
    MobileComponent,
    LogoSvgComponent,
    MenuSvgComponent,
    CloseSvgComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MobileComponent,
  ]
})
export class NavigationModule { }
