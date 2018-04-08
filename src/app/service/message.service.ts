import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";

@Injectable()
export class MessageService {
  messageObservable :Subject<string>;

  constructor() {
    this.messageObservable = new Subject<string>();
  }
  report(msg: string) {
    console.log('get message');
    this.messageObservable.next(msg);
  }

}
