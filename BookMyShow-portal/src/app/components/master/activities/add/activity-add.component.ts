import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Activity } from 'src/app/models/extended-models';
import { AbstractActivity } from '../domain/abstract-activity';

@Component({
    selector: "app-activity-add",
    templateUrl: './activity-add.component.html'
})
export class ActivityAddComponent extends AbstractActivity implements OnInit, OnDestroy {
    activity: Activity;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.activity = new Activity();
        this.activityFormGroup = this.formBuilder.formGroup(this.activity) as IFormGroup<Activity>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
