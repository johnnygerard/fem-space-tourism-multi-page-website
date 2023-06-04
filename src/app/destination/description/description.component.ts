import { Component } from '@angular/core';
import { Destination } from '../destination.enum';
import { SelectionService } from 'src/app/selection.service';

type Text = {
  name: string;
  description: string;
  distance: string;
  travelTime: string;
};

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {
  protected readonly texts: readonly Text[];

  constructor(private readonly selection: SelectionService) {
    const texts: Text[] = [];

    texts[Destination.MOON] = {
      name: 'Moon',
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: '384,400 km',
      travelTime: '3 days',
    };

    texts[Destination.MARS] = {
      name: 'Mars',
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      distance: '225 mil. km',
      travelTime: '9 months',
    };

    texts[Destination.EUROPA] = {
      name: 'Europa',
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      distance: '628 mil. km',
      travelTime: '3 years',
    };

    texts[Destination.TITAN] = {
      name: 'Titan',
      description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      distance: '1.6 bil. km',
      travelTime: '7 years',
    };

    this.texts = texts;
  }

  protected get text(): Text {
    return this.texts[this.selection.selected];
  }
}
