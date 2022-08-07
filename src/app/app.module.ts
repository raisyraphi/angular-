import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingvar } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasslistComponent } from './classlist/classlist.component';

@NgModule({
  declarations: [
    AppComponent,
    routingvar,
    ClasslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
