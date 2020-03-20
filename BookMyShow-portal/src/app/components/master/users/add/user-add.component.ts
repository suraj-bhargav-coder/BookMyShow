import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { User } from 'src/app/models/extended-models';
import { AbstractUser } from '../domain/abstract-user';

@Component({
    selector: "app-user-add",
    templateUrl: './user-add.component.html'
})
export class UserAddComponent extends AbstractUser implements OnInit, OnDestroy {
    user: User;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.user = new User();
        this.userFormGroup = this.formBuilder.formGroup(this.user) as IFormGroup<User>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
