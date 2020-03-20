import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './seat.routing'

import { SeatListComponent } from './list/seat-list.component'
import { SeatEditComponent } from './edit/seat-edit.component';
import { SeatAddComponent } from './add/seat-add.component';
import { SeatSharedModule } from './seat-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,SeatSharedModule,
        ROUTING
    ],
    declarations: [SeatListComponent,SeatEditComponent,SeatAddComponent],
    exports: [RouterModule],
    providers: []
})
export class SeatModule { }


