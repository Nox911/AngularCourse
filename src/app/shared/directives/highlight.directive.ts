import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
    highlightElement() {
      this.element.nativeElement.classList.add('active');
    }

  @HostListener('mouseleave')
  removeHighlight() {
    this.element.nativeElement.classList.remove('active');
  }

}
