import { Component } from '@angular/core';
import { Destination } from '../destination.enum';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  protected readonly labels = <readonly string[]>Object.values(Destination)
    .filter(key => typeof key === 'string');

  constructor(private readonly selection: SelectionService) { }

  protected get destination(): Destination {
    return this.selection.selected;
  }

  protected set destination(value: Destination) {
    this.selection.selected = value;
  }
}
