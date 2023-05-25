import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyImageComponent } from './technology-image.component';

describe('TechnologyImageComponent', () => {
  let component: TechnologyImageComponent;
  let fixture: ComponentFixture<TechnologyImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologyImageComponent]
    });
    fixture = TestBed.createComponent(TechnologyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
