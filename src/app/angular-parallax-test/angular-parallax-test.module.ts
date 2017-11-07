import {AngularParallaxTestComponent} from './angular-parallax-test/angular-parallax-test.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Parallax, ParallaxConfig} from 'ngx-parallax';

@NgModule({
  declarations: [
    // components
    AngularParallaxTestComponent,
    Parallax
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // services

  ],
  exports: [
    AngularParallaxTestComponent
  ]
})
export class AngularParallaxTestModule {}
