import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractUser } from '../domain/abstract-user';
import { User } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-user-list",
    templateUrl:'./user-list.component.html'
})
export class UserListComponent extends AbstractUser implements OnInit, OnDestroy {
    users: List<User>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<User>) => {
            this.users = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
