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


const routes: Routes = [
  {path: 'form', component: FormComponent },
  {path: 'event', component: EventBindingComponent },
  {path: 'databinding', component: DataBindingComponent },
  {path: 'directive', component: DirectiveComponent },
  {path: 'custom-directive', component: CustomDirectiveComponent },
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

  ],
  imports: [
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
