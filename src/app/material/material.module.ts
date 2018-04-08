import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialMainComponent } from './material-main/material-main.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { SignupComponent } from './auth/signup/signup.component';
import { TrainingComponent } from './training/training/training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import {LoginComponent} from "./auth/login/login.component";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes: Routes = [
  {path: 'material', component: MaterialMainComponent,
    children: [
      { path: 'signup', component: SignupComponent },
      { path: 'login', component: LoginComponent },
      { path: 'training', component: TrainingComponent },
      { path: '**', component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [
    FlexLayoutModule,
    SharedModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MaterialMainComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    PastTrainingComponent,
    NewTrainingComponent,
    CurrentTrainingComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialModule { }
