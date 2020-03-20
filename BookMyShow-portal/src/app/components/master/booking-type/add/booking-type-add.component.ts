import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { BookingType } from 'src/app/models/extended-models';
import { AbstractBookingType } from '../domain/abstract-booking-type';

@Component({
    selector: "app-booking-type-add",
    templateUrl: './booking-type-add.component.html'
})
export class BookingTypeAddComponent extends AbstractBookingType implements OnInit, OnDestroy {
    bookingType: BookingType;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.bookingType = new BookingType();
        this.bookingTypeFormGroup = this.formBuilder.formGroup(this.bookingType) as IFormGroup<BookingType>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
