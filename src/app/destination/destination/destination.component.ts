import { Component } from '@angular/core';
import { Page } from 'src/app/pages.enum';
import { SELECTION_TOKEN, SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  providers: [
    SelectionService,
    { provide: SELECTION_TOKEN, useValue: { length: 4, interval: 1e4 } }
  ]
})
export class DestinationComponent {
  protected readonly page = Page.DESTINATION;
}
