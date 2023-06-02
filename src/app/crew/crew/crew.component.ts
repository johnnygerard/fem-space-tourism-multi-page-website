import { Component } from '@angular/core';
import { Pages } from 'src/app/pages.enum';
import { SELECTION_TOKEN, SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e4 } }
  ]
})
export class CrewComponent {
  protected readonly page = Pages.CREW;
}
