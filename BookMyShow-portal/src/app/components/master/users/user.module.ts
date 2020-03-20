import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './user.routing'

import { UserListComponent } from './list/user-list.component'
import { UserEditComponent } from './edit/user-edit.component';
import { UserAddComponent } from './add/user-add.component';
import { UserSharedModule } from './user-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,UserSharedModule,
        ROUTING
    ],
    declarations: [UserListComponent,UserEditComponent,UserAddComponent],
    exports: [RouterModule],
    providers: []
})
export class UserModule { }


