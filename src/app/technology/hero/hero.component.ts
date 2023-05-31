import { Component } from '@angular/core';
import { Technology } from '../technology';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  protected readonly landscape: readonly string[];
  protected readonly portrait: readonly string[];

  constructor(private selection: SelectionService) {
    const technologies = [
      'launch-vehicle',
      'spaceport',
      'space-capsule',
    ];

    const getUrl = (baseName: string) => `technology/${baseName}.png`;

    this.landscape = technologies.map(tech => getUrl(tech + '-768x310'));
    this.portrait = technologies.map(tech => getUrl(tech + '-515x527'));
  }

  protected get technology(): Technology {
    return this.selection.selected;
  }
}
