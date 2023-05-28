import { Component } from '@angular/core';
import { Pages } from '../pages';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  protected readonly pages = Pages;

}
