import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LogoSvgComponent } from './svg/logo-svg.component';
import { MenuSvgComponent } from './svg/menu-svg.component';
import { CloseSvgComponent } from './svg/close-svg.component';
import { MobileComponent } from './mobile/mobile.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    LogoSvgComponent,
    MenuSvgComponent,
    CloseSvgComponent,
    MobileComponent,
    TopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopComponent,
  ]
})
export class NavigationModule { }
