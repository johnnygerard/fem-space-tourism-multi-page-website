import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-svg',
  template: `
    <svg viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" fill="#FFF" />
      <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 40 20C20 20 20 0 20 0Z"
          fill="#0B0D17" />
    </svg>
  `,
  styles: [`:host { display: block }`]
})
export class LogoSvgComponent {

}
