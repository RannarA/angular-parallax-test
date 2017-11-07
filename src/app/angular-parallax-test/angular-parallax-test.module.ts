import {AngularParallaxTestComponent} from './angular-parallax-test/angular-parallax-test.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Parallax, ParallaxConfig} from 'ngx-parallax';
import {RouterModule, Routes} from '@angular/router';
import { BasicExampleComponent } from './containers/basic-example/basic-example.component';

const appRoutes: Routes = [
  { path: '', component: BasicExampleComponent }
];

@NgModule({
  declarations: [
    // components
    AngularParallaxTestComponent,
    Parallax,
    BasicExampleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    // services

  ],
  exports: [
    AngularParallaxTestComponent
  ]
})
export class AngularParallaxTestModule {}
