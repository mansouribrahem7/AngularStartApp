import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Styling]',
})
export class StylingDirective {
  constructor(public elemRef: ElementRef) {
    this.elemRef.nativeElement.style.border = 'none';
  }
  @HostListener('mouseover') OnMouseOver() {
    this.elemRef.nativeElement.style.border = '2px solid blue';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.elemRef.nativeElement.style.border = 'none';
  }
}
