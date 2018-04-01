import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from "@angular/core";


class Context {
  constructor(public $implicit: any) {}
}

@Directive({
  selector: '[swForOf]'
})
export class SwForStructureDirective implements OnInit{

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>){ }

  @Input('swForOf')
  data: any;

  ngOnInit(): void {
    //console.log(this.data);
    this.container.clear();
    for(let i=0; i<this.data.length; i++) {
      this.container.createEmbeddedView(this.template,new Context(this.data[i]));
    }
  }

}
