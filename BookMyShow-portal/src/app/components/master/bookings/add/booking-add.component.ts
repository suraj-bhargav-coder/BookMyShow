import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Booking } from 'src/app/models/extended-models';
import { AbstractBooking } from '../domain/abstract-booking';

@Component({
    selector: "app-booking-add",
    templateUrl: './booking-add.component.html'
})
export class BookingAddComponent extends AbstractBooking implements OnInit, OnDestroy {
    booking: Booking;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.booking = new Booking();
        this.bookingFormGroup = this.formBuilder.formGroup(this.booking) as IFormGroup<Booking>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
