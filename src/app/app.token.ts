import {InjectionToken} from "@angular/core";

export const JSON_SERVER_URL = `http://${location.hostname}:3000/`;
export const REST_URL = new InjectionToken('backend-url');
