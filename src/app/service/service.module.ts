import {ErrorHandler, NgModule} from "@angular/core";
import {SimpleDatasource} from "./simple-datasource.service";
import {ProductRepository} from "./product-repository.service";
import {DiscountService} from "./discount.service";
import {RestDatasource} from "./rest-datasource.service";
import {HttpModule, JsonpModule} from "@angular/http";
import {MessageService} from "./message.service";
import {MainErrorHandler} from "./main-error-handler.service";


@NgModule({
  providers: [
    SimpleDatasource,
    RestDatasource,
    ProductRepository,
    DiscountService,
    JsonpModule,
    MessageService,
    {provide: ErrorHandler, useClass: MainErrorHandler},
  ],
  imports: [
    HttpModule,
  ]
})
export class ServiceModule{ }
