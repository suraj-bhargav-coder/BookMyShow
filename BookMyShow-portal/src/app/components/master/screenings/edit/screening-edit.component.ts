import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractScreening } from '../domain/abstract-screening';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Screening } from 'src/app/models/extended-models';

@Component({
    selector: "app-screening-edit",
    templateUrl: './screening-edit.component.html'
})
export class ScreeningEditComponent extends AbstractScreening implements OnInit, OnDestroy {
    screening: Screening;
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
            this.screeningFormGroup = this.formBuilder.formGroup(Screening,t) as IFormGroup<Screening>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
