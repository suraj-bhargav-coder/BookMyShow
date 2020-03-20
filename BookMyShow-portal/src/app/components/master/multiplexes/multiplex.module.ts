import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './multiplex.routing'

import { MultiplexListComponent } from './list/multiplex-list.component'
import { MultiplexEditComponent } from './edit/multiplex-edit.component';
import { MultiplexAddComponent } from './add/multiplex-add.component';
import { MultiplexSharedModule } from './multiplex-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,MultiplexSharedModule,
        ROUTING
    ],
    declarations: [MultiplexListComponent,MultiplexEditComponent,MultiplexAddComponent],
    exports: [RouterModule],
    providers: []
})
export class MultiplexModule { }


