import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractEvent } from '../domain/abstract-event';
import { Event } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-event-list",
    templateUrl:'./event-list.component.html'
})
export class EventListComponent extends AbstractEvent implements OnInit, OnDestroy {
    events: List<Event>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Event>) => {
            this.events = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
