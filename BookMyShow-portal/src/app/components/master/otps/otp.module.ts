import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './otp.routing'

import { OtpListComponent } from './list/otp-list.component'
import { OtpEditComponent } from './edit/otp-edit.component';
import { OtpAddComponent } from './add/otp-add.component';
import { OtpSharedModule } from './otp-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,OtpSharedModule,
        ROUTING
    ],
    declarations: [OtpListComponent,OtpEditComponent,OtpAddComponent],
    exports: [RouterModule],
    providers: []
})
export class OtpModule { }


