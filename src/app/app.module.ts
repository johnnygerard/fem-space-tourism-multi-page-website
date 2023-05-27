import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TechnologyModule } from './technology/technology.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
