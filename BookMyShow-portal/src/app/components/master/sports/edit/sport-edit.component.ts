import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractSport } from '../domain/abstract-sport';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Sport } from 'src/app/models/extended-models';

@Component({
    selector: "app-sport-edit",
    templateUrl: './sport-edit.component.html'
})
export class SportEditComponent extends AbstractSport implements OnInit, OnDestroy {
    sport: Sport;
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
            this.sportFormGroup = this.formBuilder.formGroup(Sport,t) as IFormGroup<Sport>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
