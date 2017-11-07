import { Component, OnInit } from '@angular/core';
import {ParallaxConfig} from 'ngx-parallax';

@Component({
  selector: 'app-basic-example',
  templateUrl: './basic-example.component.html',
  styleUrls: ['./basic-example.component.sass']
})
export class BasicExampleComponent implements OnInit {

  parallaxConfig: ParallaxConfig = {
    initialValue: -100,
    ratio: .2
  };

  constructor() { }

  ngOnInit() {
  }

}
