import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './invoice.routing'

import { InvoiceListComponent } from './list/invoice-list.component'
import { InvoiceEditComponent } from './edit/invoice-edit.component';
import { InvoiceAddComponent } from './add/invoice-add.component';
import { InvoiceSharedModule } from './invoice-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,InvoiceSharedModule,
        ROUTING
    ],
    declarations: [InvoiceListComponent,InvoiceEditComponent,InvoiceAddComponent],
    exports: [RouterModule],
    providers: []
})
export class InvoiceModule { }


