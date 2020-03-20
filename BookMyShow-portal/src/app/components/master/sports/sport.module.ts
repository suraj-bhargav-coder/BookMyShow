import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './sport.routing'

import { SportListComponent } from './list/sport-list.component'
import { SportEditComponent } from './edit/sport-edit.component';
import { SportAddComponent } from './add/sport-add.component';
import { SportSharedModule } from './sport-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,SportSharedModule,
        ROUTING
    ],
    declarations: [SportListComponent,SportEditComponent,SportAddComponent],
    exports: [RouterModule],
    providers: []
})
export class SportModule { }


