import {AngularParallaxTestComponent} from './angular-parallax-test/angular-parallax-test.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    // components
    AngularParallaxTestComponent
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
