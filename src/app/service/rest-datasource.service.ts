import {Inject, Injectable} from "@angular/core";
import {Http, Request, RequestMethod, Response, Headers} from "@angular/http";
import {REST_URL} from "../app.token";
import {Observable} from "rxjs/Observable";
import {MessageService} from "./message.service";

@Injectable()
export class RestDatasource {
  readonly toJson = (response: Response) => {console.log(response);  return response.json();};

  constructor(private http: Http,
              @Inject(REST_URL) private url: string,
              private messageService:MessageService) {
    console.log(url);
  }

  get(url: string): Observable<any> {
    // return this.http.get(this.url + url  ).map(this.toJson);
    return this.request(RequestMethod.Get, url);
  }

  post(url: string, body?: any): Observable<any> {
    return this.request(RequestMethod.Post, url, body);
  }

  put(url: string, body?: any): Observable<any> {
    return this.request(RequestMethod.Put, url, body);
  }

  delete(url: string): Observable<any> {
    return this.request(RequestMethod.Delete, url);
  }


  request(verb: RequestMethod, url: string, body?: any): Observable<any> {
    url = this.getBackendUrl(url);
    console.log(this.url);
    return this.http.request(new Request({
      method: verb,
      url: url,
      body: body,
      headers: new Headers({
        'Access-Key': '<secret>',
        'Application-Name': 'angular-learning',
      })
    }))
      .map((response: Response) => response.json())
      .catch((response: Response) => {
        console.log('Server status : '+response.status);
        console.log('Server Message : '+response.statusText);
        let error = response.json();
        console.log(error != null ? 'Server Error Spec: ' + JSON.stringify(error) : 'No Spec');
        this.messageService.report(error);
        return Observable.throw({
          status: `Server Error: ${response.statusText}, ${response.status}`,
          message: error.message == null ?  `Server Error: ${response.statusText}, ${response.status}` : error.message,
        });
      })

  }

  private getBackendUrl(url: string): string {
    return this.concatWithBackendUrl( this.substrSlash(url) );
}

  substrSlash(url: string): string{
    if(url.startsWith('/')) { url = url.substr(1,url.length); }
    return url;
  }

  private concatWithBackendUrl(url: string): string {
    return this.url + url;
  }
}
