import { Component } from '@angular/core';

@Component({
  selector: 'app-close-svg',
  template: `
    <svg width="20" height="20" viewBox="0 0 20 20">
      <g stroke="#D0D6F9" stroke-width="3">
        <line x1="2" y1="2" x2="18" y2="18" />
        <line x1="18" y1="2" x2="2" y2="18" />
      </g>
    </svg>
  `,
})
export class CloseSvgComponent {

}
