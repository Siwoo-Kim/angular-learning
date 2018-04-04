import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BasicProjectMessageService} from "../../../service/basic-project-message.service";
import {Message} from "../../../model/message.model";
declare var $: any;

@Component({
  selector: 'basic-project-basic-message',
  templateUrl: './basic-message.component.html',
  styleUrls: ['./basic-message.component.css']
})
export class BasicMessageComponent implements OnInit, AfterViewInit {
  lastMessage: Message;
  closed: boolean = false;

  constructor(private messageService: BasicProjectMessageService) {
    messageService.setHandler((_message => this.lastMessage = _message));
  }

  ngAfterViewInit(): void {
    $('.message .close').on('click', function () {
      $(this).closest('.message').transition('fade');
    });
  }

  ngOnInit() {

  }
}
