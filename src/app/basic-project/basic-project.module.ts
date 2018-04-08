import {NgModule} from "@angular/core";
import { BasicProjectTableComponent } from './main/table/basic-project-table.component';
import { BasicProjectMainComponent } from './main/main/basic-project-main.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {BasicProjectService} from "./service/basic-project-service.module";
import {SharedModule} from "../shared/shared.module";
import { BasicProjectFormComponent } from './main/basic-project-form/basic-project-form.component';
import { BasicMessageComponent } from './main/basic-message/basic-message.component';
import {StatePipe} from "../pipe/state.pipe";
import {HttpModule} from "@angular/http";

const routes: Routes = [
  {path: 'basic-project', component: BasicProjectMainComponent, children: [
      {path: 'form/:mode', component: BasicProjectFormComponent },
      {path: 'form/:mode/:id', component: BasicProjectFormComponent },
      {path: '', component: BasicProjectTableComponent },
    ] }
];

@NgModule({
  declarations: [
    BasicProjectTableComponent,
    BasicProjectMainComponent,
    BasicProjectFormComponent,
    BasicMessageComponent,
    StatePipe,
  ],
  imports: [
    SharedModule,
    BasicProjectService,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class BasicProjectModule {

}
