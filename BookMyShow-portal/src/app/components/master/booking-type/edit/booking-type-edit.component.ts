import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractBookingType } from '../domain/abstract-booking-type';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { BookingType } from 'src/app/models/extended-models';

@Component({
    selector: "app-booking-type-edit",
    templateUrl: './booking-type-edit.component.html'
})
export class BookingTypeEditComponent extends AbstractBookingType implements OnInit, OnDestroy {
    bookingType: BookingType;
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
            this.bookingTypeFormGroup = this.formBuilder.formGroup(BookingType,t) as IFormGroup<BookingType>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
