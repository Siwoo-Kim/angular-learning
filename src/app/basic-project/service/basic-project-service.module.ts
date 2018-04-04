import {NgModule} from "@angular/core";
import {BasicProjectStaticDatasource} from "./basic-project-static-datasource.service";
import {BasicProjectProductRepository} from "./basic-project-product-repository.service";
import {SharedState} from "../../model/shared-state.model";
import {BasicProjectMessageService} from "../../service/basic-project-message.service";


@NgModule({
  providers: [
    BasicProjectStaticDatasource,
    BasicProjectProductRepository,
    BasicProjectMessageService,
    SharedState,
  ]
})
export class BasicProjectService{ }
