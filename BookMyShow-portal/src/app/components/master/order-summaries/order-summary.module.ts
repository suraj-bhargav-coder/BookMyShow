import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './order-summary.routing'

import { OrderSummaryListComponent } from './list/order-summary-list.component'
import { OrderSummaryEditComponent } from './edit/order-summary-edit.component';
import { OrderSummaryAddComponent } from './add/order-summary-add.component';
import { OrderSummarySharedModule } from './order-summary-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,OrderSummarySharedModule,
        ROUTING
    ],
    declarations: [OrderSummaryListComponent,OrderSummaryEditComponent,OrderSummaryAddComponent],
    exports: [RouterModule],
    providers: []
})
export class OrderSummaryModule { }


