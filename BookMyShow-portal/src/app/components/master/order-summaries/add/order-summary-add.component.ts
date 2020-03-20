import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { OrderSummary } from 'src/app/models/extended-models';
import { AbstractOrderSummary } from '../domain/abstract-order-summary';

@Component({
    selector: "app-order-summary-add",
    templateUrl: './order-summary-add.component.html'
})
export class OrderSummaryAddComponent extends AbstractOrderSummary implements OnInit, OnDestroy {
    orderSummary: OrderSummary;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.orderSummary = new OrderSummary();
        this.orderSummaryFormGroup = this.formBuilder.formGroup(this.orderSummary) as IFormGroup<OrderSummary>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
