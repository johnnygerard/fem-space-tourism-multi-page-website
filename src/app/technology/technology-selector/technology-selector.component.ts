import { Component } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-technology-selector',
  templateUrl: './technology-selector.component.html',
  styleUrls: ['./technology-selector.component.scss']
})
export class TechnologySelectorComponent {
  constructor(private technologyService: TechnologyService) { }

  protected get technology(): Technology {
    return this.technologyService.technology;
  }

  protected set technology(value: Technology) {
    this.technologyService.technology = value;
  }
}
