import { Component } from '@angular/core';
import { Pages } from 'src/app/pages.enum';
import { SELECTION_TOKEN, SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 3, interval: 1e4 } }
  ]
})
export class TechnologyComponent {
  protected readonly page = Pages.TECHNOLOGY;
}
