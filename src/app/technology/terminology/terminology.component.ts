import { Component } from '@angular/core';
import { TechnologyService } from '../technology.service';
import { Technology } from '../technology';

@Component({
  selector: 'app-terminology',
  templateUrl: './terminology.component.html',
  styleUrls: ['./terminology.component.scss']
})
export class TerminologyComponent {
  protected readonly techNames: readonly string[] = [
    'launch vehicle',
    'spaceport',
    'space capsule',
  ];

  protected readonly descriptions: readonly string[] = [
    `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to
carry a payload from Earth's surface to space, usually to Earth orbit or
beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing
150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    `A spaceport or cosmodrome is a site for launching (or receiving)
spacecraft, by analogy to the seaport for ships or airport for aircraft. Based
in the famous Cape Canaveral, our spaceport is ideally situated to take
advantage of the Earth’s rotation for launch.`,
    `A space capsule is an often-crewed spacecraft that uses a blunt-body
reentry capsule to reenter the Earth's atmosphere without wings. Our capsule
is where you'll spend your time during the flight. It includes a space gym,
cinema, and plenty of other activities to keep you entertained.`
  ];

  constructor(private techService: TechnologyService) { }

  protected get technology(): Technology {
    return this.techService.technology;
  }
}
