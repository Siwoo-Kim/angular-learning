import {NgModule} from "@angular/core";
import {DataBindingComponent} from "./data-binding.component";
import {EventBindingComponent} from "./event-binding/event-binding/event-binding.component";
import {FormComponent} from "./form/form.component";
import {
  SwBackgroundAttribute, SwModelAttribute,
  SwProductAttribute
} from "./custom-directive/directives/attr.directive";
import {SwForStructureDirective} from "./structural-directive/directives/sw-for-structure.directive";
import {ServicingComponent} from "./servicing/servicing.component";
import {CustomDirectiveComponent} from "./custom-directive/custom-directive.component";
import {ComponentsComponent} from "./components/components.component";
import {ProductTableComponent} from "./components/product-table/product-table.component";
import {DirectiveComponent} from "./directive.component";
import {PipesComponent} from "./pipes/pipes.component";
import {SwIfStructureDirective} from "./structural-directive/directives/sw-if-structure.directive";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {StructuralDirectiveComponent} from "./structural-directive/structural-directive.component";
import {DiscountEditorComponent} from "./servicing/discount-editor/discount-editor.component";
import {DiscountDisplayComponent} from "./servicing/discount-display/discount-display.component";
import {ToggleViewComponent} from "./components/toggle-view/toggle-view.component";
import {ServiceModule} from "../service/service.module";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import { BasicMainComponent } from './basic-main/basic-main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: 'basic', component: BasicMainComponent, children: [
      {path: 'form', component: FormComponent},
      {path: 'event', component: EventBindingComponent},
      {path: 'databinding', component: DataBindingComponent},
      {path: 'directive', component: DirectiveComponent},
      {path: 'custom-directive', component: CustomDirectiveComponent},
      {path: 'sdirective', component: StructuralDirectiveComponent},
      {path: 'component', component: ComponentsComponent},
      {path: 'pipe', component: PipesComponent},
      {path: 'servicing', component: ServicingComponent},
      {path: '**', redirectTo: 'servicing'},
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DataBindingComponent,
    DirectiveComponent,
    EventBindingComponent,
    FormComponent,
    CustomDirectiveComponent,
    SwBackgroundAttribute,
    SwProductAttribute,
    SwModelAttribute,
    StructuralDirectiveComponent,
    SwIfStructureDirective,
    SwForStructureDirective,
    ComponentsComponent,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    PipesComponent,
    ServicingComponent,
    DiscountDisplayComponent,
    DiscountEditorComponent,
    BasicMainComponent,
  ],
})
export class BasicModule{}
