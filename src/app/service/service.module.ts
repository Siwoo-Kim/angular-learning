import {NgModule} from "@angular/core";
import {SimpleDatasource} from "./simple-datasource.service";
import {ProductRepository} from "./product-repository.service";


@NgModule({
  providers: [
    SimpleDatasource,
    ProductRepository,
  ],
})
export class ServiceModule{ }
