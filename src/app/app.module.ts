import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage, provideImageKitLoader } from '@angular/common';

import { AppComponent } from './app.component';
import { TechnologySelectorComponent } from './technology/technology-selector/technology-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologySelectorComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [
    provideImageKitLoader('https://ik.imagekit.io/jgerard/fem-space-tourism-multi-page-website')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
