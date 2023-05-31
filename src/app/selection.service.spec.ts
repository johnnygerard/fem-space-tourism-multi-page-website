import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SELECTION_TOKEN, SelectionService } from './selection.service';

describe('SelectionService', () => {
  const options = { length: 5, interval: 1e4 };
  let service: SelectionService;

  // Required because timers must be created and cleared within fakeAsync
  const setUpAndTearDown = (callback: () => void) => () => {
    service = TestBed.inject(SelectionService);
    callback();
    service.ngOnDestroy();
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SelectionService,
        { provide: SELECTION_TOKEN, useValue: options }
      ]
    });
  });

  it('should be created', setUpAndTearDown(() => {
    expect(service).toBeTruthy();
  }));

  it('should initially select the first value', setUpAndTearDown(() => {
    expect(service.selected).toEqual(0);
  }));

  it('should cycle through the values', fakeAsync(setUpAndTearDown(() => {
    for (let i = 1; i < options.length; i++) {
      tick(options.interval);
      expect(service.selected).toEqual(i);
    }
  })));

  it('should cycle back to the first value', fakeAsync(setUpAndTearDown(() => {
    tick(options.interval * options.length);
    expect(service.selected).toEqual(0);
  })));

  it('should reset the interval when the selected value changes',
    fakeAsync(setUpAndTearDown(() => {
      const value = options.length - 1;

      tick(options.interval / 2);
      expect(service.selected).toEqual(0);

      service.selected = value;

      tick(options.interval - 1);
      expect(service.selected).toEqual(value);
    })));
});
