import { Component } from '@angular/core';
import { Pages } from 'src/app/shared/title/title.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  protected readonly page = Pages.TECHNOLOGY;
}
