import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './screen.routing'

import { ScreenListComponent } from './list/screen-list.component'
import { ScreenEditComponent } from './edit/screen-edit.component';
import { ScreenAddComponent } from './add/screen-add.component';
import { ScreenSharedModule } from './screen-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ScreenSharedModule,
        ROUTING
    ],
    declarations: [ScreenListComponent,ScreenEditComponent,ScreenAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ScreenModule { }


