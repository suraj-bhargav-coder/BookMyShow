import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Screen } from 'src/app/models/extended-models';
import { AbstractScreen } from '../domain/abstract-screen';

@Component({
    selector: "app-screen-add",
    templateUrl: './screen-add.component.html'
})
export class ScreenAddComponent extends AbstractScreen implements OnInit, OnDestroy {
    screen: Screen;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.screen = new Screen();
        this.screenFormGroup = this.formBuilder.formGroup(this.screen) as IFormGroup<Screen>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
