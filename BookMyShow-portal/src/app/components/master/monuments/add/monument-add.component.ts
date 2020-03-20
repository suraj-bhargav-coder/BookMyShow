import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Monument } from 'src/app/models/extended-models';
import { AbstractMonument } from '../domain/abstract-monument';

@Component({
    selector: "app-monument-add",
    templateUrl: './monument-add.component.html'
})
export class MonumentAddComponent extends AbstractMonument implements OnInit, OnDestroy {
    monument: Monument;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.monument = new Monument();
        this.monumentFormGroup = this.formBuilder.formGroup(this.monument) as IFormGroup<Monument>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
