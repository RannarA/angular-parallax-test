import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularParallaxTestComponent } from './angular-parallax-test.component';

describe('AngularParallaxTestComponent', () => {
  let component: AngularParallaxTestComponent;
  let fixture: ComponentFixture<AngularParallaxTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularParallaxTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularParallaxTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
