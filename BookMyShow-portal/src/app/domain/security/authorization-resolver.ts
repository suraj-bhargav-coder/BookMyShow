import { Injectable } from '@angular/core';
import { IAuthorize, AuthorizeConfig } from '@rxweb/angular-router';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthorizationResolver implements IAuthorize {

    constructor(private router: Router) { }

    authorize(authorizeConfig: AuthorizeConfig, route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
        var promise = new Promise<boolean>((resolve, reject) => {
            var t = this;
            console.log("call authorization");
            resolve(true);
        })
        return promise;
    }

    authorizeChildren(authorizeConfig: AuthorizeConfig, pageAuthorizeConfig: AuthorizeConfig) {
        return false;
    }
}
