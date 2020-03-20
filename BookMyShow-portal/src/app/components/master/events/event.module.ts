import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './event.routing'

import { EventListComponent } from './list/event-list.component'
import { EventEditComponent } from './edit/event-edit.component';
import { EventAddComponent } from './add/event-add.component';
import { EventSharedModule } from './event-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,EventSharedModule,
        ROUTING
    ],
    declarations: [EventListComponent,EventEditComponent,EventAddComponent],
    exports: [RouterModule],
    providers: []
})
export class EventModule { }


