import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {SharedModule} from "./shared/shared.module";
import {BasicModule} from "./components/basic.module";
import {BasicMainComponent} from "./components/basic-main/basic-main.component";
import {BasicProjectModule} from "./basic-project/basic-project.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainModule} from "./main/main.module";
import {MaterialModule} from "./material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {JSON_SERVER_URL, REST_URL} from "./app.token";
import {MainErrorHandler} from "./service/main-error-handler.service";


const routes: Routes = [
  {path: 'basic', component: BasicMainComponent},
  {path: '**', redirectTo: 'basic-project'},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    MainModule,
    BasicProjectModule,
    BrowserAnimationsModule,
    BasicModule,
    SharedModule,
    BrowserModule,
    ServiceModule,
    RouterModule.forRoot(routes),
  ],
  providers: [

    {provide: REST_URL, useValue: JSON_SERVER_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
