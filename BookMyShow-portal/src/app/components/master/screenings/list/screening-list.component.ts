import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractScreening } from '../domain/abstract-screening';
import { Screening } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-screening-list",
    templateUrl:'./screening-list.component.html'
})
export class ScreeningListComponent extends AbstractScreening implements OnInit, OnDestroy {
    screenings: List<Screening>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Screening>) => {
            this.screenings = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
