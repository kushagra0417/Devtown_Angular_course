import { Directive,ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlightTxt]'
})
export class HightlightTxtDirective implements OnInit {

  constructor(private element:ElementRef) { }
   ngOnInit(): void {
     this.element.nativeElement.style.backgroundColor = "red"
     this.element.nativeElement.style.color="White"
     
   }
}
