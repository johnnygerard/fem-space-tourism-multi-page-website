import { Injectable, OnDestroy } from '@angular/core';
import { Technology } from './technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService implements OnDestroy {
  private _technology: Technology;
  private _id = 0;

  constructor() {
    this._technology = 1;
    this.resetTimer();
  }

  get technology(): Technology {
    return this._technology;
  }

  set technology(value: Technology) {
    this.resetTimer();
    this._technology = value;
  }

  private resetTimer(): void {
    const handler: TimerHandler = () => {
      this._technology = this._technology < 3 ? this._technology + 1 : 1;
    }

    clearInterval(this._id);
    this._id = setInterval(handler, 12000);
  }

  ngOnDestroy(): void {
    clearInterval(this._id);
  }
}
