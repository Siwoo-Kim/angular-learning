import {NgModule} from "@angular/core";
import {BasicProjectStaticDatasource} from "./basic-project-static-datasource.service";
import {BasicProjectProductRepository} from "./basic-project-product-repository.service";
import {SharedState} from "../../model/shared-state.model";


@NgModule({
  providers: [
    BasicProjectStaticDatasource,
    BasicProjectProductRepository,
    SharedState,
  ]
})
export class BasicProjectService{ }
