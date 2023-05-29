import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <app-side *ngIf="isMobile; else top" />
    <ng-template #top>
      <app-top />
    </ng-template>
  `
})
export class NavigationComponent {
  private readonly BREAKPOINT = 768;
  protected isMobile: boolean;

  constructor() {
    this.isMobile = this._isMobile();
  }

  private _isMobile(): boolean {
    return window.innerWidth < this.BREAKPOINT;
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = this._isMobile();
  }
}
