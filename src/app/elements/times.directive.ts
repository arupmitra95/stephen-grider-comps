// Customised directive not learnt. This is simply copy psting from tutorial/

import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  // @Input() appTimes: number = 0;
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }
  
  @Input('appTimes') set render(times: number){
    this.viewContainer.clear();
    for(let i = 0; i < times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{});
    }
  }
}
