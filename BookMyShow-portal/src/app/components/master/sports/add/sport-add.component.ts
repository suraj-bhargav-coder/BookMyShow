import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Sport } from 'src/app/models/extended-models';
import { AbstractSport } from '../domain/abstract-sport';

@Component({
    selector: "app-sport-add",
    templateUrl: './sport-add.component.html'
})
export class SportAddComponent extends AbstractSport implements OnInit, OnDestroy {
    sport: Sport;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.sport = new Sport();
        this.sportFormGroup = this.formBuilder.formGroup(this.sport) as IFormGroup<Sport>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
