import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMultiplex } from '../domain/abstract-multiplex';
import { Multiplex } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-multiplex-list",
    templateUrl:'./multiplex-list.component.html'
})
export class MultiplexListComponent extends AbstractMultiplex implements OnInit, OnDestroy {
    multiplexes: List<Multiplex>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Multiplex>) => {
            this.multiplexes = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
