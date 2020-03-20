import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './activity.routing'

import { ActivityListComponent } from './list/activity-list.component'
import { ActivityEditComponent } from './edit/activity-edit.component';
import { ActivityAddComponent } from './add/activity-add.component';
import { ActivitySharedModule } from './activity-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ActivitySharedModule,
        ROUTING
    ],
    declarations: [ActivityListComponent,ActivityEditComponent,ActivityAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ActivityModule { }


