import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight('aqua');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('darkgray');
  }
  private highlight(color: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
