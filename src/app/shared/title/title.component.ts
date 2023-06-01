import { Component, Input, OnInit } from '@angular/core';

export enum Pages {
  DESTINATION,
  CREW,
  TECHNOLOGY,
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  protected heading!: string;
  @Input() appPage!: Pages;

  ngOnInit(): void {
    this.heading = [
      'Pick your destination',
      'Meet your crew',
      'Space launch 101',
    ][this.appPage];
  }
}
