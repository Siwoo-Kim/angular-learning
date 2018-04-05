import {Component, Inject, OnInit} from '@angular/core';
import {SHARED_STATE, SharedState} from "../../../model/shared-state.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'basic-project-main',
  templateUrl: './basic-project-main.component.html',
  styleUrls: ['./basic-project-main.component.css']
})
export class BasicProjectMainComponent {


  constructor(@Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
  }
}
