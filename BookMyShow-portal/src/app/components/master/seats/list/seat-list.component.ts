import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractSeat } from '../domain/abstract-seat';
import { Seat } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-seat-list",
    templateUrl:'./seat-list.component.html'
})
export class SeatListComponent extends AbstractSeat implements OnInit, OnDestroy {
    seats: List<Seat>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Seat>) => {
            this.seats = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
