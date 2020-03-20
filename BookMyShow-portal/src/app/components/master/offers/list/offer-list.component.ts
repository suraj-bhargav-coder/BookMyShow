import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractOffer } from '../domain/abstract-offer';
import { Offer } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-offer-list",
    templateUrl:'./offer-list.component.html'
})
export class OfferListComponent extends AbstractOffer implements OnInit, OnDestroy {
    offers: List<Offer>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Offer>) => {
            this.offers = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
