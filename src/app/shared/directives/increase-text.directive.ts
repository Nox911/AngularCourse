import { Directive, ElementRef, HostListener, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appIncreaseText]'
})
export class IncreaseTextDirective {
  @Input('appIncreaseText') appIncreaseText: string;
  private initialTextSize = this.element.nativeElement.style.fontSize;

  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener('click')
    changeColor() {
      this.element.nativeElement.style.fontSize === this.initialTextSize
        ? this.render.setStyle(this.element.nativeElement, 'fontSize', this.appIncreaseText)
        : this.render.setStyle(this.element.nativeElement, 'fontSize', this.initialTextSize);
    }
}

