import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractInvoice } from '../domain/abstract-invoice';
import { Invoice } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-invoice-list",
    templateUrl:'./invoice-list.component.html'
})
export class InvoiceListComponent extends AbstractInvoice implements OnInit, OnDestroy {
    invoices: List<Invoice>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Invoice>) => {
            this.invoices = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
