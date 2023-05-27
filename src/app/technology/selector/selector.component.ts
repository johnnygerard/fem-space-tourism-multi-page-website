import { Component } from '@angular/core';
import { Technology } from '../technology';
import { TechnologyService } from '../technology.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  constructor(private technologyService: TechnologyService) { }

  protected get technology(): Technology {
    return this.technologyService.technology;
  }

  protected set technology(value: Technology) {
    this.technologyService.technology = value;
  }
}
