import { Component } from '@angular/core';
import { Technology } from '../technology';

@Component({
  selector: 'app-technology-selector',
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss']
})
export class TechnologySelectorComponent {
  technology: Technology = Technology.LAUNCH_VEHICLE;

  protected setTechnology(n: Technology) {
    this.technology = n;
  }
}
