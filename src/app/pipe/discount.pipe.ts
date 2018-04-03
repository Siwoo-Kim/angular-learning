import {Pipe, PipeTransform} from "@angular/core";
import {DiscountService} from "../service/discount.service";

@Pipe({
  name: 'discount',
  pure: false,
})
export class DiscountPipe implements PipeTransform {

  constructor(private discounter: DiscountService) {
  }

  transform(price: number): any {
    return this.discounter.discount(price);
  }

}
