import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractOrderSummary } from '../domain/abstract-order-summary';
import { OrderSummary } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-order-summary-list",
    templateUrl:'./order-summary-list.component.html'
})
export class OrderSummaryListComponent extends AbstractOrderSummary implements OnInit, OnDestroy {
    orderSummaries: List<OrderSummary>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<OrderSummary>) => {
            this.orderSummaries = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
