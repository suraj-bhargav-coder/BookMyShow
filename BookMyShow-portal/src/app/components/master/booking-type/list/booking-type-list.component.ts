import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractBookingType } from '../domain/abstract-booking-type';
import { BookingType } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-booking-type-list",
    templateUrl:'./booking-type-list.component.html'
})
export class BookingTypeListComponent extends AbstractBookingType implements OnInit, OnDestroy {
    bookingType: List<BookingType>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<BookingType>) => {
            this.bookingType = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
