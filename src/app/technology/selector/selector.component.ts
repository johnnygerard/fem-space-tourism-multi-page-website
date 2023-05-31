import { Component } from '@angular/core';
import { Technology } from '../technology';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  constructor(private selection: SelectionService) { }

  protected get technology(): Technology {
    return this.selection.selected;
  }

  protected set technology(value: Technology) {
    this.selection.selected = value;
  }
}
