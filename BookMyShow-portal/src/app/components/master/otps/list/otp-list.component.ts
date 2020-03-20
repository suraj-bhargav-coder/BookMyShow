import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractOtp } from '../domain/abstract-otp';
import { Otp } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-otp-list",
    templateUrl:'./otp-list.component.html'
})
export class OtpListComponent extends AbstractOtp implements OnInit, OnDestroy {
    url: string = 'https://localhost:44352/';
    otps: List<Otp>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get(this.url+'api/Otps').subscribe((t: List<Otp>) => {
            this.otps = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
