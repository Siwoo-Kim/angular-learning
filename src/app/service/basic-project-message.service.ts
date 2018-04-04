import {Injectable} from "@angular/core";
import {Message} from "../model/message.model";

@Injectable()
export class BasicProjectMessageService {
  private handler: (_message: Message) => void;

  report(message: Message) {
    if(this.handler != null) {
      this.handler(message);
    }
  }

  setHandler(handler: (_message: Message) => void) {
    this.handler = handler;
  }
}
