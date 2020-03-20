import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractScreen } from '../domain/abstract-screen';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Screen } from 'src/app/models/extended-models';

@Component({
    selector: "app-screen-edit",
    templateUrl: './screen-edit.component.html'
})
export class ScreenEditComponent extends AbstractScreen implements OnInit, OnDestroy {
    screen: Screen;
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
            this.screenFormGroup = this.formBuilder.formGroup(Screen,t) as IFormGroup<Screen>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
