import { Component } from '@angular/core';
import { links } from '../navigation.array';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  protected readonly links = links;
}
