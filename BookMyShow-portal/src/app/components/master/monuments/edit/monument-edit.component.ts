import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMonument } from '../domain/abstract-monument';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Monument } from 'src/app/models/extended-models';

@Component({
    selector: "app-monument-edit",
    templateUrl: './monument-edit.component.html'
})
export class MonumentEditComponent extends AbstractMonument implements OnInit, OnDestroy {
    monument: Monument;
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
            this.monumentFormGroup = this.formBuilder.formGroup(Monument,t) as IFormGroup<Monument>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
