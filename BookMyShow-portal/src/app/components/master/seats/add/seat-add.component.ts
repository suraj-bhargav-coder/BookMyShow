import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Seat } from 'src/app/models/extended-models';
import { AbstractSeat } from '../domain/abstract-seat';

@Component({
    selector: "app-seat-add",
    templateUrl: './seat-add.component.html'
})
export class SeatAddComponent extends AbstractSeat implements OnInit, OnDestroy {
    seat: Seat;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.seat = new Seat();
        this.seatFormGroup = this.formBuilder.formGroup(this.seat) as IFormGroup<Seat>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
