import { Component } from '@angular/core';
import { SELECTION_TOKEN, SelectionService } from 'src/app/selection.service';
import { Pages } from 'src/app/shared/title/title.component';

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
