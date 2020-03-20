import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Screening } from 'src/app/models/extended-models';
import { AbstractScreening } from '../domain/abstract-screening';

@Component({
    selector: "app-screening-add",
    templateUrl: './screening-add.component.html'
})
export class ScreeningAddComponent extends AbstractScreening implements OnInit, OnDestroy {
    screening: Screening;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.screening = new Screening();
        this.screeningFormGroup = this.formBuilder.formGroup(this.screening) as IFormGroup<Screening>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
