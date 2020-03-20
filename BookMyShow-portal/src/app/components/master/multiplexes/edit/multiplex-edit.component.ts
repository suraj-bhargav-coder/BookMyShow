import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMultiplex } from '../domain/abstract-multiplex';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Multiplex } from 'src/app/models/extended-models';

@Component({
    selector: "app-multiplex-edit",
    templateUrl: './multiplex-edit.component.html'
})
export class MultiplexEditComponent extends AbstractMultiplex implements OnInit, OnDestroy {
    multiplex: Multiplex;
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
            this.multiplexFormGroup = this.formBuilder.formGroup(Multiplex,t) as IFormGroup<Multiplex>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
