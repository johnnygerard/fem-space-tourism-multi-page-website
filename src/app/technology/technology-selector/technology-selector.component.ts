import { Component } from '@angular/core';

enum Technology {
  LAUNCH_VEHICLE = 1,
  SPACEPORT,
  SPACE_CAPSULE
}

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
