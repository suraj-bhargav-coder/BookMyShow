import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractActivity } from '../domain/abstract-activity';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Activity } from 'src/app/models/extended-models';

@Component({
    selector: "app-activity-edit",
    templateUrl: './activity-edit.component.html'
})
export class ActivityEditComponent extends AbstractActivity implements OnInit, OnDestroy {
    activity: Activity;
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
            this.activityFormGroup = this.formBuilder.formGroup(Activity,t) as IFormGroup<Activity>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
