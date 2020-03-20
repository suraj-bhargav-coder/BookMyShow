import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractShow } from '../domain/abstract-show';
import { Show } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-show-list",
    templateUrl:'./show-list.component.html'
})
export class ShowListComponent extends AbstractShow implements OnInit, OnDestroy {
    shows: List<Show>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Show>) => {
            this.shows = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
