import {NgModule} from "@angular/core";
import {BasicProjectStaticDatasource} from "./basic-project-static-datasource.service";
import {BasicProjectProductRepository} from "./basic-project-product-repository.service";
import {SHARED_STATE, SharedState} from "../../model/shared-state.model";
import {BasicProjectMessageService} from "../../service/basic-project-message.service";
import {Subject} from "rxjs/Subject";


@NgModule({
  providers: [
    BasicProjectStaticDatasource,
    BasicProjectProductRepository,
    BasicProjectMessageService,
    { provide: SHARED_STATE, useValue: new Subject<SharedState>() }
  ]
})
export class BasicProjectService{ }
