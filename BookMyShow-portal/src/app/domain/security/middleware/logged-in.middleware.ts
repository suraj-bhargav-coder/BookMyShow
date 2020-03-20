import { Injectable } from '@angular/core';
import { IMiddleware } from '@rxweb/angular-router'
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStorage } from '../../services/browser-storage';

@Injectable({
    providedIn: 'root',
})
export class LoggedInMiddleware implements IMiddleware {
    constructor(private router: Router, private storage: BrowserStorage) { }
    invoke(user: { [key: string]: any; }, activateRouteSnapshot: any): boolean | Promise<boolean> {
        debugger;
        var auth = this.storage.local.get('auth');
        if (auth)
            this.router.navigate(['login']);
        return true;
    }
}
