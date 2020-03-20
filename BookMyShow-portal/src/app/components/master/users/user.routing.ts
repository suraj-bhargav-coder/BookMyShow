import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './list/user-list.component';
import { UserAddComponent } from './add/user-add.component';
import { UserEditComponent } from './edit/user-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: UserListComponent
    },
    {
        path: 'add',
        component: UserAddComponent
    },
    {
        path: ':id',
        component:  UserEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
