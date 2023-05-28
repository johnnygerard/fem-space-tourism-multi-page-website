import { Component } from '@angular/core';
import { Pages } from '../pages';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  protected sideNavOpened = false;
  protected readonly pages = Pages;

  protected toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
