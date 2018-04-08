import {Component} from '@angular/core';
import {BasicProjectMessageService} from "../../../service/basic-project-message.service";
import {Message} from "../../../model/message.model";
import {NavigationCancel, NavigationEnd, Router} from "@angular/router";
import 'rxjs/Rx';
declare var $: any;

@Component({
  selector: 'basic-project-basic-message',
  templateUrl: './basic-message.component.html',
  styleUrls: ['./basic-message.component.css']
})
export class BasicMessageComponent {
  lastMessage: Message;
  hasMessage: boolean = false;

  constructor(
    private messageService: BasicProjectMessageService,
    private router: Router) {
    this.messageService.messageSubject.subscribe(message => {
      this.lastMessage = message;
      this.hasMessage = true;
    });

    router.events
      .filter(event => event instanceof NavigationEnd ||event instanceof NavigationCancel )
      .subscribe(event => this.lastMessage = null);
  }

}
