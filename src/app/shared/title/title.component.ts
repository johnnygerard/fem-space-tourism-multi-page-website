import { Component, Input, OnInit } from '@angular/core';
import { Pages } from 'src/app/pages.enum';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  protected heading = '';
  @Input() appPage = Pages.HOME;

  ngOnInit(): void {
    const headings: string[] = [];
    headings[Pages.DESTINATION] = 'Pick your destination';
    headings[Pages.CREW] = 'Meet your crew';
    headings[Pages.TECHNOLOGY] = 'Space launch 101';

    this.heading = headings[this.appPage];
  }
}
