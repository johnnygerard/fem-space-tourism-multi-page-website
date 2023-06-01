import { Component } from '@angular/core';
import { CrewRole } from '../crew-role';
import { SelectionService } from 'src/app/selection.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  protected readonly urls: readonly string[];
  protected readonly crewRoles = CrewRole;

  constructor(private readonly selection: SelectionService) {
    this.urls = [
      'commander-569x702',
      'mission-specialist-454x654',
      'pilot-555x654',
      'flight-engineer-616x606',
    ].map(base => `/crew/${base}.png`);
  }

  protected get crewRole(): CrewRole {
    return this.selection.selected;
  }
}
