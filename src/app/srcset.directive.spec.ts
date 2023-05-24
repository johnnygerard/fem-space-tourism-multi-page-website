import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SrcsetDirective } from './srcset.directive';
import { Component } from '@angular/core';

@Component({
  template: `
    <img [appSrcset]="[375, 480, 640, 768]" sizes="100vw"
        appUrl="technology/launch-vehicle-768x310.png" width="768"
        height="310" fetchpriority="high" alt>
`
})
class TestComponent { }

describe('SrcsetDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SrcsetDirective
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
