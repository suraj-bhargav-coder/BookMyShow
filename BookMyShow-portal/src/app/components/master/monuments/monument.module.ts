import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './monument.routing'

import { MonumentListComponent } from './list/monument-list.component'
import { MonumentEditComponent } from './edit/monument-edit.component';
import { MonumentAddComponent } from './add/monument-add.component';
import { MonumentSharedModule } from './monument-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,MonumentSharedModule,
        ROUTING
    ],
    declarations: [MonumentListComponent,MonumentEditComponent,MonumentAddComponent],
    exports: [RouterModule],
    providers: []
})
export class MonumentModule { }


