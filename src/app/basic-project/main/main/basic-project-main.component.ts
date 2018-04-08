import { Component, Inject, OnInit } from '@angular/core';
import {SHARED_STATE, SharedState} from "../../../model/shared-state.model";
import {Observable} from "rxjs/Observable";
import {MessageService} from "../../../service/message.service";
import {style,trigger,animate, state, transition} from "@angular/animations";
import {BasicProjectMessageService} from "../../../service/basic-project-message.service";
import {Message} from "../../../model/message.model";

declare var $:any;

@Component({
  selector: 'basic-project-main',
  templateUrl: './basic-project-main.component.html',
  styleUrls: ['./basic-project-main.component.css'],
  animations: [
    trigger('messageState',[
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)',
      })),
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)',
      })),
    transition('hide => in', animate(500) ),
    transition('in => hide', animate(500) )
    ])]
})
export class BasicProjectMainComponent {
  message: {message: string, status: string};
  messageState: string = "hide";

  constructor(@Inject(SHARED_STATE) public stateEvents: Observable<SharedState>,
              private messageService: BasicProjectMessageService) {
    setTimeout(()=>{this.messageService.reportMessage(new Message('hello!'));},1000);

  }
}
