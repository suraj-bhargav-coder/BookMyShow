import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractInvoice } from '../domain/abstract-invoice';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Invoice } from 'src/app/models/extended-models';

@Component({
    selector: "app-invoice-edit",
    templateUrl: './invoice-edit.component.html'
})
export class InvoiceEditComponent extends AbstractInvoice implements OnInit, OnDestroy {
    invoice: Invoice;
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
            this.invoiceFormGroup = this.formBuilder.formGroup(Invoice,t) as IFormGroup<Invoice>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
