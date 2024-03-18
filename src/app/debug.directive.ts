import {
  AfterViewInit,
  Directive,
  ElementRef,
  ViewContainerRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[debugDir]',
  standalone: true,
})
export class DebugDirective implements AfterViewInit {
  @Input() dimDisplay: string = 'red';
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    console.log('A');

    const el = this.elementRef.nativeElement;
    el.style.border = `4px solid ${this.dimDisplay}`;
    el.addEventListener('click', () => alert('debug mode'));
  }
}
