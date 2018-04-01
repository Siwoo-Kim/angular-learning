import {
  Directive,
  Input,
  OnChanges,
  SimpleChange,
  TemplateRef,
  ViewContainerRef}
from "@angular/core";

@Directive({
  selector: '[swIf]'
})
export class SwIfStructureDirective implements OnChanges{
  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<Object>) {}
  @Input('swIf')
  result: boolean;

  ngOnChanges(changes: {[key: string]: SimpleChange}): void {
    let change = changes['result'];
    if(!change.isFirstChange()&& !change.currentValue) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }

}
