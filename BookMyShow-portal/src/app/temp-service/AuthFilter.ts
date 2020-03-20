import { XhrContext, AbstractRequestFilter, ResponseFilter, HttpResponse } from "@rxweb/http"
import { Router } from '@angular/router'
import { Toastr } from '@rxweb/js'
import { BaseToastr } from '../domain/customize-design/toastr'
import { BrowserStorage } from '../domain/services/browser-storage'
export class AuthFilter extends AbstractRequestFilter implements ResponseFilter {

  constructor(private browserStorage: BrowserStorage, private router: Router, private baseToastr: BaseToastr) {
    super()
    this.browserStorage = new BrowserStorage();
  }

  onRequest = (context: XhrContext) => {
    if (this.byPassApiList.indexOf(context.request.path) != 0) {
      let Authorization = this.browserStorage.local.get("auth", false); 
      let xRequest = this.browserStorage.local.get("x-request",false);
      context.request.headers["Authorization"] = Authorization;
      context.request.headers["x-request"] = xRequest;

      console.log(Authorization);
    }
    this.onRequestExecuting(context);
    
  }

  onResponse = (response: HttpResponse) => {
    return response;
  }

  byPassApiList: any[] = ["api/Authentication", "api/Authorize/logout"]
}

export enum HttpResponseCode {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  TokenNotFound = 600,

}
