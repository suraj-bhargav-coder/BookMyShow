import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Offer } from 'src/app/models/extended-models';
import { AbstractOffer } from '../domain/abstract-offer';

@Component({
    selector: "app-offer-add",
    templateUrl: './offer-add.component.html'
})
export class OfferAddComponent extends AbstractOffer implements OnInit, OnDestroy {
    offer: Offer;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.offer = new Offer();
        this.offerFormGroup = this.formBuilder.formGroup(this.offer) as IFormGroup<Offer>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
