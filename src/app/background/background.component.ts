import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Page } from '../pages.enum';
import { links } from '../navigation/navigation.array';
import { IK_BASE_URL } from '../shared/srcset.directive';

const breakpoints = ['desktop', 'tablet', 'mobile'] as const;
type Breakpoint = typeof breakpoints[number];

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  protected readonly urls: { [key in Breakpoint]: string[] } = {
    desktop: [],
    tablet: [],
    mobile: [],
  };

  protected index: Page = Page.HOME;

  constructor(router: Router) {
    const urls = links.map(link => link.url);
    const pages = (Object.values(Page)
      .filter(key => typeof key === 'string') as string[])
      .map(key => key.toLowerCase());

    for (const page of pages)
      for (const breakpoint of breakpoints)
        this.urls[breakpoint as Breakpoint]
          .push(`${IK_BASE_URL}/backgrounds/${page}-${breakpoint}.png`);

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        this.index = urls.indexOf(event.urlAfterRedirects);
    });
  }
}
