import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {DataBindingComponent} from "./components/data-binding.component";
import {DirectiveComponent} from "./components/directive.component";
import { EventBindingComponent } from './components/event-binding/event-binding/event-binding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSortModule,
  MatTableModule
} from "@angular/material";
import { FormComponent } from './components/form/form.component';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import {
  SwBackgroundAttribute, SwModelAttribute, SwProductAttribute,
} from "./components/custom-directive/directives/attr.directive";
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import {SwIfStructureDirective} from "./components/structural-directive/directives/sw-if-structure.directive";
import {SwForStructureDirective} from "./components/structural-directive/directives/sw-for-structure.directive";
import { ComponentsComponent } from './components/components/components.component';
import {SharedModule} from "./shared/shared.module";
import { ProductTableComponent } from './components/components/product-table/product-table.component';
import { ProductFormComponent } from './components/components/product-form/product-form.component';
import { ToggleViewComponent } from './components/components/toggle-view/toggle-view.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ServicingComponent } from './components/servicing/servicing.component';
import { DiscountDisplayComponent } from './components/servicing/discount-display/discount-display.component';
import { DiscountEditorComponent } from './components/servicing/discount-editor/discount-editor.component';
import {BasicModule} from "./components/basic.module";
import {BasicMainComponent} from "./components/basic-main/basic-main.component";


const routes: Routes = [
  {path: 'basic', component: BasicMainComponent},
  {path: '**', redirectTo: 'basic'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BasicModule,
    SharedModule,
    BrowserModule,
    ServiceModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
