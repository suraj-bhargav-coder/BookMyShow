import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './screening.routing'

import { ScreeningListComponent } from './list/screening-list.component'
import { ScreeningEditComponent } from './edit/screening-edit.component';
import { ScreeningAddComponent } from './add/screening-add.component';
import { ScreeningSharedModule } from './screening-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ScreeningSharedModule,
        ROUTING
    ],
    declarations: [ScreeningListComponent,ScreeningEditComponent,ScreeningAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ScreeningModule { }


