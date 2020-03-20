import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractScreen } from '../domain/abstract-screen';
import { Screen } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-screen-list",
    templateUrl:'./screen-list.component.html'
})
export class ScreenListComponent extends AbstractScreen implements OnInit, OnDestroy {
    screens: List<Screen>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Screen>) => {
            this.screens = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
