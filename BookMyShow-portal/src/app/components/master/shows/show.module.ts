import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './show.routing'

import { ShowListComponent } from './list/show-list.component'
import { ShowEditComponent } from './edit/show-edit.component';
import { ShowAddComponent } from './add/show-add.component';
import { ShowSharedModule } from './show-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ShowSharedModule,
        ROUTING
    ],
    declarations: [ShowListComponent,ShowEditComponent,ShowAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ShowModule { }


