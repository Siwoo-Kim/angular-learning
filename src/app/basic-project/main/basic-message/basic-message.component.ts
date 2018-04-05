import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  hasMessage: boolean = false;

  constructor(private messageService: BasicProjectMessageService) {
    messageService.message.subscribe(message => {
      this.lastMessage = message;
      this.hasMessage = this.lastMessage.text != "" ;
      setTimeout(()=>{
        $(this).closest('.message').transition('fade');
        this.closeMessage();
      },2000);
    });

    var value = this.hasMessage;
    $(document).on('click','i.closableIcon', function () {
      $(this).closest('.message').transition('fade');
      value=false;
    });

  }

  ngAfterViewInit(){}

  ngOnInit() {}

  closeMessage() {
    setTimeout(() => this.hasMessage = false, 2000);
  }
}
