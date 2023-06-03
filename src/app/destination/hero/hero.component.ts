import { Component } from '@angular/core';
import { SelectionService } from 'src/app/selection.service';
import { Destination } from '../destination.enum';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  protected readonly urls: readonly string[];

  constructor(private readonly selection: SelectionService) {
    this.urls = (Object.values(Destination)
      .filter(key => typeof key === 'string') as string[])
      .map(key => `destination/${key.toLowerCase()}.png`);
  }

  protected get destination(): Destination {
    return this.selection.selected;
  }
}
