import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Invoice } from 'src/app/models/extended-models';
import { AbstractInvoice } from '../domain/abstract-invoice';

@Component({
    selector: "app-invoice-add",
    templateUrl: './invoice-add.component.html'
})
export class InvoiceAddComponent extends AbstractInvoice implements OnInit, OnDestroy {
    invoice: Invoice;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.invoice = new Invoice();
        this.invoiceFormGroup = this.formBuilder.formGroup(this.invoice) as IFormGroup<Invoice>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
