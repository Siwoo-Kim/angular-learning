import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {ServiceModule} from "./service/service.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";
import {SharedModule} from "./shared/shared.module";
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
