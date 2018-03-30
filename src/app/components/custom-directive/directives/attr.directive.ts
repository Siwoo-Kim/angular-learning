import {
  Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output,
  SimpleChange, SimpleChanges
} from "@angular/core";
import {Product} from "../../../model/product.model";
import {Element} from "../custom-directive.component"


@Directive({
  selector: '[sw-bg]'
})
export class SwBackgroundAttribute implements OnChanges{

  @Input('sw-bg')
  bgClass: string;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    let change = changes['bgClass'];
    let classList = this.elementRef.nativeElement.classList;
    if(change.isFirstChange()) {
      classList.add(this.bgClass || 'bg-light');
    }
    if(!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if(!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}

@Directive({
  selector: '[sw-product]'
})
export class SwProductAttribute {

  @Input('sw-product')
  product: Product;
  @Output('sw-category')
  categoryEmitter: EventEmitter<string> = new EventEmitter<string>();

  @HostBinding('class')
  bgClass: string;

  @HostListener('click')
  clickEventHandler(callback: Event) {
    //toggle
    if(!this.bgClass)
      this.bgClass = 'bg-primary';
    else
      this.bgClass = '';
  }
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.addEventListener('click', e => {
      console.log(e);
      this.categoryEmitter.emit(this.product.category);
    })
  }
}

@Directive({
  selector: 'input[swModel]'
})
export class SwModelAttribute implements OnChanges{
  //Binding Component Property
  @Input('swModel')
  value: string;

  //Binding Element Attribute
  @HostBinding('value')
  inputValue: string = '';

  //Emitting the change to component
  @Output('swModelChange')
  emitChange:EventEmitter<string> = new EventEmitter<string>();

  //Catch the moment when @Input property is changed
  ngOnChanges(changes: {[key: string]: SimpleChange}): void {
    let change = changes['value'];
    if(change.currentValue != this.inputValue) {
      this.inputValue = changes['value'].currentValue || "";
    }
  }

  //When event is occurred update the value of attribute and emit to notice component with the new value
  @HostListener('input',['$event.target.value'])
  updateValue(newValue: string) {
    this.inputValue = newValue;
    this.emitChange.emit(newValue);
  }
}
