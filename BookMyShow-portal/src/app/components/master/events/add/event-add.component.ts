import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Event } from 'src/app/models/extended-models';
import { AbstractEvent } from '../domain/abstract-event';

@Component({
    selector: "app-event-add",
    templateUrl: './event-add.component.html'
})
export class EventAddComponent extends AbstractEvent implements OnInit, OnDestroy {
    event: Event;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.event = new Event();
        this.eventFormGroup = this.formBuilder.formGroup(this.event) as IFormGroup<Event>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
