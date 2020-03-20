import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Show } from 'src/app/models/extended-models';
import { AbstractShow } from '../domain/abstract-show';

@Component({
    selector: "app-show-add",
    templateUrl: './show-add.component.html'
})
export class ShowAddComponent extends AbstractShow implements OnInit, OnDestroy {
    show: Show;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.show = new Show();
        this.showFormGroup = this.formBuilder.formGroup(this.show) as IFormGroup<Show>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
