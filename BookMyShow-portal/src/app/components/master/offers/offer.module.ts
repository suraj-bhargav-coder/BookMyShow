import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './offer.routing'

import { OfferListComponent } from './list/offer-list.component'
import { OfferEditComponent } from './edit/offer-edit.component';
import { OfferAddComponent } from './add/offer-add.component';
import { OfferSharedModule } from './offer-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,OfferSharedModule,
        ROUTING
    ],
    declarations: [OfferListComponent,OfferEditComponent,OfferAddComponent],
    exports: [RouterModule],
    providers: []
})
export class OfferModule { }


