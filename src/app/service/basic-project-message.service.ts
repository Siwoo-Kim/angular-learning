import {Injectable} from "@angular/core";
import {Message} from "../model/message.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BasicProjectMessageService {
  messageSubject = new Subject<Message>();

  reportMessage(message: Message) {
    this.messageSubject.next(message); //발행
  }

  get message(): Observable<Message> {
    return this.messageSubject; //구독가능한 이벤트-데이터소스 리턴
  }

}
