import {Injectable} from "@angular/core";


@Injectable()
export class DiscountService {
  private discountValue: number = 10;

  set value(value: number) {
    this.discountValue = value || 0;
  }

  get value() {
    return this.discountValue;
  }

  discount(price: number) {
    return Math.max(price - this.value , 5);
  }

}
