import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, first } from 'rxjs';

enum Pages {
  '/destination',
  '/crew',
  '/technology',
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  protected heading = '';
  protected index = 0;

  constructor(route: Router) {
    const headings: readonly string[] = [
      'Pick your destination',
      'Meet your crew',
      'Space launch 101',
    ];

    route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      first()
    ).subscribe(_event => {
      const index = Pages[route.url as keyof typeof Pages];

      if (typeof index !== 'number')
        throw Error('Component loaded on unexpected page.');
      this.heading = headings[index];
      this.index = index;
    });
  }
}
