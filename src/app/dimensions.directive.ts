import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[dimensionDisplay]',
  standalone: true,
})
export class DimensionsDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    console.log('B');
    el.dataset[
      'dims'
    ] = `{width: ${el.clientWidth}, height: ${el.clientHeight}}`;

    el.classList.add('box');
  }
}
