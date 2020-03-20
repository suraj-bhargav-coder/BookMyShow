import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractUser } from '../domain/abstract-user';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/models/extended-models';

@Component({
    selector: "app-user-edit",
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent extends AbstractUser implements OnInit, OnDestroy {
    user: User;
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
            this.userFormGroup = this.formBuilder.formGroup(User,t) as IFormGroup<User>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
