import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {SharedModule} from "./shared/shared.module";
import {BasicModule} from "./components/basic.module";
import {BasicMainComponent} from "./components/basic-main/basic-main.component";
import {BasicProjectModule} from "./basic-project/basic-project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./main/main.module";


const routes: Routes = [
  {path: 'basic', component: BasicMainComponent},
  {path: '**', redirectTo: 'basic-project'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    BasicProjectModule,
    BrowserAnimationsModule,
    BasicModule,
    SharedModule,
    BrowserModule,
    ServiceModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
