import { Injectable } from '@angular/core';
import { IAuthResolver } from '@rxweb/angular-router'

@Injectable({
    providedIn: 'root',
})
export class AuthResolver implements IAuthResolver {

    resolveAuth(): Promise<{ [key: string]: any; }> | { [key: string]: any; } {
        var promise = new Promise<{ [key: string]: any; }>((resolve, reject) => {
            resolve(undefined)
        })
        return promise;
    }
}
