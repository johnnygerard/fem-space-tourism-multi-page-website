import { Inject, Injectable, InjectionToken, OnDestroy } from '@angular/core';

type SelectionOptions = { length: number, interval: number };
export const SELECTION_TOKEN =
  new InjectionToken<SelectionOptions>('selectionOptions');

@Injectable()
export class SelectionService implements OnDestroy {
  private readonly INTERVAL: number;
  private readonly LENGTH: number;
  private intervalId = 0;
  private _selected = 0;

  get selected(): number {
    return this._selected;
  }

  set selected(value: number) {
    this._selected = value;
    this.resetInterval();
  }

  constructor(@Inject(SELECTION_TOKEN) options: SelectionOptions) {
    this.INTERVAL = options.interval;
    this.LENGTH = options.length;
    this.resetInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  private resetInterval(): void {
    const timerHandler: TimerHandler = () => {
      this._selected = (this._selected + 1) % this.LENGTH;
    };

    clearInterval(this.intervalId);
    this.intervalId = setInterval(timerHandler, this.INTERVAL);
  }
}
