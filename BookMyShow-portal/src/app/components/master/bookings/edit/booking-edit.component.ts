import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBooking } from '../domain/abstract-booking';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Booking } from 'src/app/models/extended-models';

@Component({
    selector: "app-booking-edit",
    templateUrl: './booking-edit.component.html'
})
export class BookingEditComponent extends AbstractBooking implements OnInit, OnDestroy {
    booking: Booking;
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
            this.bookingFormGroup = this.formBuilder.formGroup(Booking,t) as IFormGroup<Booking>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
