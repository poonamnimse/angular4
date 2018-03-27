import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    //@Input() highlightColor: string;

//       constructor(Element: ElementRef) {
//          console.log(Element);
//          Element.nativeElement.innerText="Text is changed by changeText Directive. ";
//          Element.nativeElement.style.backgroundColor = 'yellow';
//       }
       @Input('appHighlight') highlightColor: string;
    constructor(private el: ElementRef) {}
    
//
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }


}
