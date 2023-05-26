import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TechnologySelectorComponent } from './technology/technology-selector/technology-selector.component';
import { TerminologyComponent } from './technology/terminology/terminology.component';
import { TechnologyImageComponent } from './technology/technology-image/technology-image.component';
import { SrcsetDirective } from './srcset.directive';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologySelectorComponent,
    TerminologyComponent,
    TechnologyImageComponent,
    SrcsetDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
