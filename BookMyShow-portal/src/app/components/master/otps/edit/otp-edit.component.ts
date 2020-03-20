import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractOtp } from '../domain/abstract-otp';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Otp } from 'src/app/models/extended-models';

@Component({
    selector: "app-otp-edit",
    templateUrl: './otp-edit.component.html'
})
export class OtpEditComponent extends AbstractOtp implements OnInit, OnDestroy {
    otp: Otp;
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
            this.otpFormGroup = this.formBuilder.formGroup(Otp,t) as IFormGroup<Otp>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
