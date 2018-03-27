import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {DataBindingComponent} from "./components/data-binding.component";
import {DirectiveComponent} from "./components/directive.component";
import { EventBindingComponent } from './components/event-binding/event-binding/event-binding.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatFormFieldModule, MatInputModule} from "@angular/material";
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  {path: 'form', component: FormComponent },
  {path: 'event', component: EventBindingComponent },
  {path: 'databinding', component: DataBindingComponent },
  {path: 'directive', component: DirectiveComponent },
  {path: '**', redirectTo: 'product'},
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectiveComponent,
    EventBindingComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    ServiceModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
