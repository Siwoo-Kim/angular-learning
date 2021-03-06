import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { IntroComponent } from './intro/intro.component';
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HttpModule,
  ],
  declarations: [HeaderComponent, IntroComponent],
  exports: [HeaderComponent, IntroComponent]
})
export class MainModule { }
