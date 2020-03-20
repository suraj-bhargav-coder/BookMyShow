import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Multiplex } from 'src/app/models/extended-models';
import { AbstractMultiplex } from '../domain/abstract-multiplex';

@Component({
    selector: "app-multiplex-add",
    templateUrl: './multiplex-add.component.html'
})
export class MultiplexAddComponent extends AbstractMultiplex implements OnInit, OnDestroy {
    multiplex: Multiplex;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.multiplex = new Multiplex();
        this.multiplexFormGroup = this.formBuilder.formGroup(this.multiplex) as IFormGroup<Multiplex>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
