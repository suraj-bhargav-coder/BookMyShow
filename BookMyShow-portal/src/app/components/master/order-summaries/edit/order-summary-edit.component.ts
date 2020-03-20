import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractOrderSummary } from '../domain/abstract-order-summary';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { OrderSummary } from 'src/app/models/extended-models';

@Component({
    selector: "app-order-summary-edit",
    templateUrl: './order-summary-edit.component.html'
})
export class OrderSummaryEditComponent extends AbstractOrderSummary implements OnInit, OnDestroy {
    orderSummary: OrderSummary;
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
            this.orderSummaryFormGroup = this.formBuilder.formGroup(OrderSummary,t) as IFormGroup<OrderSummary>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
