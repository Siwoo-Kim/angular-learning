import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {DataBindingComponent} from "./components/data-binding.component";
import {DirectiveComponent} from "./components/directive.component";


const routes: Routes = [
  {path: 'databinding', component: DataBindingComponent },
  {path: 'directive', component: DirectiveComponent },
  {path: '**', redirectTo: 'product'},
];

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectiveComponent,
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
