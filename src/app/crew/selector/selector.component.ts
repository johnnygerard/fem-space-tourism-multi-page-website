import { Component } from '@angular/core';
import { SelectionService } from 'src/app/selection.service';
import { CrewRole } from '../crew-role';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  constructor(private selection: SelectionService) { }

  protected get crewRole(): CrewRole {
    return this.selection.selected;
  }

  protected set crewRole(value: CrewRole) {
    this.selection.selected = value;
  }
}
