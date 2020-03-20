import { routerModule,IMultilingual } from '@rxweb/angular-router';
import { NgModule } from '@angular/core';


import { ComponentMultilingualContentResolver } from './domain/localization/component-multilingual-content.resolver';
import { GlobalMultilingualContentResolver } from './domain/localization/global-multilingual-content.resolver';

import { AuthorizationResolver } from './domain/security/authorization-resolver';
import { AuthResolver } from './domain/security/authentication-resolver';


@routerModule({
    authentication: AuthResolver,
    authorization: AuthorizationResolver,
    middlewares: [GlobalMultilingualContentResolver, ComponentMultilingualContentResolver],
    //childMultilingualResolver: ComponentMultilingualContentResolver,
    urlEncryption:true
})
@NgModule({
    declarations: [
    ],
    imports: [
    ],
    providers: [],
})
export class RxWebModule {

}
