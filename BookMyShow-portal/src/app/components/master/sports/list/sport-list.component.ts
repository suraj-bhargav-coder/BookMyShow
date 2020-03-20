import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractSport } from '../domain/abstract-sport';
import { Sport } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-sport-list",
    templateUrl:'./sport-list.component.html'
})
export class SportListComponent extends AbstractSport implements OnInit, OnDestroy {
    sports: List<Sport>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Sport>) => {
            this.sports = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
