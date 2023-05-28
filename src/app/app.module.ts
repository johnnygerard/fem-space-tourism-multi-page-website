import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TechnologyModule } from './technology/technology.module';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationMobileComponent } from './navigation-mobile/navigation-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationMobileComponent,
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
