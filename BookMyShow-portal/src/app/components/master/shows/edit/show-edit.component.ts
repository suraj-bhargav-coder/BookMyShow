import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractShow } from '../domain/abstract-show';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Show } from 'src/app/models/extended-models';

@Component({
    selector: "app-show-edit",
    templateUrl: './show-edit.component.html'
})
export class ShowEditComponent extends AbstractShow implements OnInit, OnDestroy {
    show: Show;
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
            this.showFormGroup = this.formBuilder.formGroup(Show,t) as IFormGroup<Show>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
