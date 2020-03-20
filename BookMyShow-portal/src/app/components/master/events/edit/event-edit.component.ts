import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractEvent } from '../domain/abstract-event';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Event } from 'src/app/models/extended-models';

@Component({
    selector: "app-event-edit",
    templateUrl: './event-edit.component.html'
})
export class EventEditComponent extends AbstractEvent implements OnInit, OnDestroy {
    event: Event;
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
            this.eventFormGroup = this.formBuilder.formGroup(Event,t) as IFormGroup<Event>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
