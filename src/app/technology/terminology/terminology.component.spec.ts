import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminologyComponent } from './terminology.component';

describe('TerminologyComponent', () => {
  let component: TerminologyComponent;
  let fixture: ComponentFixture<TerminologyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminologyComponent]
    });
    fixture = TestBed.createComponent(TerminologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
