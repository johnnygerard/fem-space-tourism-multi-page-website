import { Component, Input, OnInit } from '@angular/core';
import { Page } from 'src/app/pages.enum';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  protected heading = '';
  @Input() appPage = Page.HOME;

  ngOnInit(): void {
    const headings: string[] = [];
    headings[Page.DESTINATION] = 'Pick your destination';
    headings[Page.CREW] = 'Meet your crew';
    headings[Page.TECHNOLOGY] = 'Space launch 101';

    this.heading = headings[this.appPage];
  }
}
