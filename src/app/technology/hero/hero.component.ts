import { Component } from '@angular/core';
import { TechnologyService } from '../technology.service';
import { Technology } from '../technology';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  protected readonly landscape: readonly string[];
  protected readonly portrait: readonly string[];

  constructor(private techService: TechnologyService) {
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
    return this.techService.technology;
  }
}
