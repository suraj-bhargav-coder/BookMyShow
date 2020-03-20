import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractOffer } from '../domain/abstract-offer';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Offer } from 'src/app/models/extended-models';

@Component({
    selector: "app-offer-edit",
    templateUrl: './offer-edit.component.html'
})
export class OfferEditComponent extends AbstractOffer implements OnInit, OnDestroy {
    offer: Offer;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.offerFormGroup = this.formBuilder.formGroup(Offer,t) as IFormGroup<Offer>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
