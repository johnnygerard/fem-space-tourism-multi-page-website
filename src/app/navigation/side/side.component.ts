import { Component } from '@angular/core';
import { Pages } from '../pages';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  protected sideNavOpened = false;
  protected readonly pages = Pages;

  protected toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
