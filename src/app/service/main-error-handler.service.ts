import {ErrorHandler, Injectable} from "@angular/core";
import {MessageService} from "./message.service";

@Injectable()
export class MainErrorHandler implements ErrorHandler{

  constructor(private messageService: MessageService) {}

  handleError(error: any): void {
    console.log(error);
    let msg = error instanceof Error ? error.message : error.toString();
    setTimeout(() => this.messageService.report(msg), 0 );
  }

}
