import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBooking } from '../domain/abstract-booking';
import { Booking } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-booking-list",
    templateUrl:'./booking-list.component.html'
})
export class BookingListComponent extends AbstractBooking implements OnInit, OnDestroy {
    bookings: List<Booking>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Booking>) => {
            this.bookings = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
