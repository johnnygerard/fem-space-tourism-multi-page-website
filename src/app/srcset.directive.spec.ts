import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IK_BASE_URL, SrcsetDirective } from './srcset.directive';
import { Component, Type } from '@angular/core';

/**
 * Get a random integer within an inclusive range.
 * @param min Minimum integer value
 * @param max Maximum integer value
 * @returns A random integer between min and max inclusive
 */
const getRandomInt = (min: number, max: number): number =>
  Math.floor((max - min + 1) * Math.random()) + min;

const getFixture = <T>(testComponentClass: Type<T>): ComponentFixture<T> =>
  TestBed.configureTestingModule({
    declarations: [
      testComponentClass,
      SrcsetDirective
    ]
  }).createComponent(testComponentClass);

const joinPaths = (left: string, right: string): string =>
  `${left.replace(/\/$/, '')}/${right.replace(/^\//, '')}`;

const getSrcset = (
  appSrcset: number[],
  appUrl: string,
  hasSizes: boolean,
  width: number,
  appTr?: string): string => {
  const baseURL = joinPaths(IK_BASE_URL, appUrl);
  const srcset: string[] = [];
  let queryString = `?tr=${appTr || ''}`;
  if (queryString.endsWith(':'))
    queryString += ',';

  if (hasSizes) {
    for (const descriptor of appSrcset)
      srcset.push(`${baseURL}${queryString}w-${descriptor} ${descriptor}w`)
  } else {
    for (const descriptor of appSrcset) {
      const w = descriptor * width;
      if (!Number.isInteger(w) || w < 1)
        throw new Error('Target width must be a strictly positive integer.');
      queryString += `w-${w}`;

      srcset.push(`${baseURL}${queryString} ${descriptor}x`)
    }
  }
  return srcset.join(', ');
}

describe('SrcsetDirective', () => {
  const appUrl = '_.png';
  const width = getRandomInt(1, 1e4);

  it('should create', () => {
    @Component({
      template: `<img appSrcset appUrl="${appUrl}" width="${width}" height="0">`
    }) class TestComponent { }

    const fixture = getFixture(TestComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });

  const testCases = {
    'width is missing': 'height="0"',
    'height is missing': `width="${width}"`,
    'width and height are missing': ''
  };
  for (const [text, markup] of Object.entries(testCases)) {
    it(`should throw an error if ${text}`, () => {
      @Component({
        template: `<img appSrcset appUrl="${appUrl}" ${markup}>`
      })
      class TestComponent { }

      const fixture = getFixture(TestComponent);

      expect(() => fixture.detectChanges()).toThrowError();
    });
  }

  // When appSrcset is set to the empty string, a 1x descriptor is used.
  it('should throw an error if sizes is used with x descriptors', () => {
    @Component({
      template: `<img appSrcset appUrl="${appUrl}" width="${width}" height="0"
      sizes="0">`
    })
    class TestComponent { }

    const fixture = getFixture(TestComponent);

    expect(() => fixture.detectChanges()).toThrowError();
  });

  it('should set srcset on img with sizes and no transformations', () => {
    const descriptors = [100, 200];

    @Component({
      template: `<img appUrl="${appUrl}" width="${width}" height="0" sizes="0"
      [appSrcset]="[${descriptors}]">`
    })
    class TestComponent { }

    const fixture = getFixture(TestComponent);
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img') as HTMLImageElement;
    expect(img.getAttribute('srcset'))
      .toEqual(getSrcset(descriptors, appUrl, true, 0));
  });
});
