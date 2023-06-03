import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TechnologyModule } from './technology/technology.module';
import { NavigationModule } from './navigation/navigation.module';
import { CrewModule } from './crew/crew.module';
import { DestinationModule } from './destination/destination.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TechnologyModule,
    NavigationModule,
    CrewModule,
    DestinationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
