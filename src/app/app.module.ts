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
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSortModule, MatTableModule} from "@angular/material";
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


const routes: Routes = [
  {path: 'form', component: FormComponent },
  {path: 'event', component: EventBindingComponent },
  {path: 'databinding', component: DataBindingComponent },
  {path: 'directive', component: DirectiveComponent },
  {path: 'custom-directive', component: CustomDirectiveComponent },
  {path: 'sdirective', component: StructuralDirectiveComponent },
  {path: 'component', component: ComponentsComponent },
  {path: '**', redirectTo: 'product'},
];

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ServiceModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
