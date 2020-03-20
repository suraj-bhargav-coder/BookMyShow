import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './booking.routing'

import { BookingListComponent } from './list/booking-list.component'
import { BookingEditComponent } from './edit/booking-edit.component';
import { BookingAddComponent } from './add/booking-add.component';
import { BookingSharedModule } from './booking-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,BookingSharedModule,
        ROUTING
    ],
    declarations: [BookingListComponent,BookingEditComponent,BookingAddComponent],
    exports: [RouterModule],
    providers: []
})
export class BookingModule { }


