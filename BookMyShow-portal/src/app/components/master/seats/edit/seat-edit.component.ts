import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractSeat } from '../domain/abstract-seat';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Seat } from 'src/app/models/extended-models';

@Component({
    selector: "app-seat-edit",
    templateUrl: './seat-edit.component.html'
})
export class SeatEditComponent extends AbstractSeat implements OnInit, OnDestroy {
    seat: Seat;
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
            this.seatFormGroup = this.formBuilder.formGroup(Seat,t) as IFormGroup<Seat>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
