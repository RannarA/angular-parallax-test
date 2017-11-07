import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularParallaxTestModule} from './angular-parallax-test/angular-parallax-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularParallaxTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
