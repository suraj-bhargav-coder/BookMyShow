import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './booking-type.routing'

import { BookingTypeListComponent } from './list/booking-type-list.component'
import { BookingTypeEditComponent } from './edit/booking-type-edit.component';
import { BookingTypeAddComponent } from './add/booking-type-add.component';
import { BookingTypeSharedModule } from './booking-type-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BookingTypeSharedModule,
        ROUTING
    ],
    declarations: [BookingTypeListComponent,BookingTypeEditComponent,BookingTypeAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BookingTypeModule { }


