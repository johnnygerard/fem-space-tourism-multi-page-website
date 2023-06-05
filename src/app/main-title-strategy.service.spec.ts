import { TestBed } from '@angular/core/testing';

import { MainTitleStrategy } from './main-title-strategy.service';

describe('MainTitleStrategy', () => {
  let service: MainTitleStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainTitleStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
