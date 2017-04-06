import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Swiper1Component } from './swiper1/swiper1.component';
import { MainVisualComponent } from './main-visual/main-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    Swiper1Component,
    MainVisualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
