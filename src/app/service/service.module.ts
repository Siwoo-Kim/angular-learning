import {NgModule} from "@angular/core";
import {SimpleDatasource} from "./simple-datasource.service";
import {ProductRepository} from "./product-repository.service";
import {DiscountService} from "./discount.service";


@NgModule({
  providers: [
    SimpleDatasource,
    ProductRepository,
    DiscountService,
  ],
})
export class ServiceModule{ }
