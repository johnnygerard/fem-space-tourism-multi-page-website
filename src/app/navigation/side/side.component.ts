import { Component } from '@angular/core';
import { links } from '../navigation.array';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent {
  protected sideNavOpened = false;
  protected readonly links = links;

  protected toggleSideNav() {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
