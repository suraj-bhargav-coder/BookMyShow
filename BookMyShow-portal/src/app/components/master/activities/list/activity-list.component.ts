import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractActivity } from '../domain/abstract-activity';
import { Activity } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-activity-list",
    templateUrl:'./activity-list.component.html'
})
export class ActivityListComponent extends AbstractActivity implements OnInit, OnDestroy {
    activities: List<Activity>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Activity>) => {
            this.activities = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
