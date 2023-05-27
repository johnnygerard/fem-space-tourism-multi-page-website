import {
  Directive, ElementRef, Input, OnChanges,
  Renderer2, SimpleChanges
} from '@angular/core';

export const IK_BASE_URL = 'https://ik.imagekit.io/jgerard'
  + '/fem-space-tourism-multi-page-website';

/*
The primary goal of this directive is to reduce repetitive markup which is
mostly concentrated in the srcset attribute.
It also addresses some of the limitations of NgOptimizedImage:
- Does not support source elements.
- Disallows dynamic URL changes.

Ref: https://angular.io/api/common/NgOptimizedImage

Note that SrcsetDirective:
- only supports ImageKit URLs.
- does not give warnings.
- does not set the fetchpriority attribute.

Instead, it sets the srcset attribute on both img and source elements as well
as the img src attribute selecting the smallest resolution as fallback.
*/
@Directive({
  selector: 'img[appSrcset], source[appSrcset]'
})
export class SrcsetDirective implements OnChanges {
  constructor(
    private elementRef: ElementRef<HTMLImageElement | HTMLSourceElement>,
    private renderer: Renderer2) { }

  ngOnChanges(_changes: SimpleChanges): void {
    const host = this.elementRef.nativeElement;
    const IK_URL = this.joinPaths(IK_BASE_URL, this.appUrl);
    const width = host.getAttribute('width');
    const height = host.getAttribute('height');
    const descriptorUnitIsW = host.getAttribute('sizes') !== null;
    let trParams = '';

    if (!(width && height))
      throw Error('Missing markup: set width and height attributes.');

    if (this.appSrcset === '') { // Use 1x descriptor
      if (descriptorUnitIsW)
        throw Error('Invalid markup. Do not use sizes with x descriptors.');
      this.appSrcset = [1];
    }

    if (this.appTr)
      trParams = this.appTr.endsWith(':') ? this.appTr : `${this.appTr},`;

    const srcset = this.appSrcset.map(descriptorUnitIsW ?
      w => `${IK_URL}?tr=${trParams}w-${w} ${w}w` :
      x => {
        const targetWidth = +width * x;
        if (!Number.isInteger(targetWidth) || targetWidth < 1)
          throw new Error('Target width must be a strictly positive integer.');
        return `${IK_URL}?tr=${trParams}w-${targetWidth} ${x}x`;
      });

    this.renderer.setAttribute(host, 'srcset', srcset.join(', '));

    // Set src attribute using the smallest resolution as fallback
    if (host instanceof HTMLImageElement)
      this.renderer.setAttribute(host, 'src', srcset[0].split(' ')[0]);
  }

  @Input() appTr?: string; // Transformation parameters
  @Input() appSrcset!: number[] | ''; // Array of descriptors
  @Input() appUrl!: string; // Image relative path

  private joinPaths(left: string, right: string): string {
    return `${left.replace(/\/$/, '')}/${right.replace(/^\//, '')}`;
  }
}
