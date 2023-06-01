import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecComponent } from './sec/sec.component';

import { HightLightDirective } from './directive/hight-light.directive';


@NgModule({
  declarations: [
    AppComponent,
    SecComponent,
 
    HightLightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
