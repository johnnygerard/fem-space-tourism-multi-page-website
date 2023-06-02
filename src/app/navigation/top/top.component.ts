import { Component } from '@angular/core';
import { Pages } from 'src/app/pages.enum';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  protected readonly links: readonly string[];
  protected readonly linkTexts: readonly string[];
  protected readonly indices: readonly number[];

  constructor() {
    const enumKeys = <string[]>Object.values(Pages)
      .filter(value => typeof value === 'string');

    this.linkTexts = enumKeys.map(key => key.toLowerCase());
    this.links = enumKeys.map(key => {
      const link = key === Pages[Pages.HOME] ? '' : key.toLowerCase();
      return `/${link}`;
    });
    this.indices = <number[]>Object.values(Pages)
      .filter(value => typeof value === 'number');
  }
}
