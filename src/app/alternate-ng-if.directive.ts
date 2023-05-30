import { Directive, TemplateRef, ViewContainerRef,Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAlternateNgIF]'
})
export class AlternateNgIFDirective implements OnChanges{
  @Input() appAlternateNgIF: boolean | any
  
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 
    
  }

  ngOnChanges(): void {
    if (this.appAlternateNgIF) {
        this.vcRef.createEmbeddedView(this.templateRef)
    }
    
    else {
      this.vcRef.clear()
    }
  }
}
