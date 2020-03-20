import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMonument } from '../domain/abstract-monument';
import { Monument } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-monument-list",
    templateUrl:'./monument-list.component.html'
})
export class MonumentListComponent extends AbstractMonument implements OnInit, OnDestroy {
    monuments: List<Monument>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Monument>) => {
            this.monuments = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
