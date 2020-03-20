import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowListComponent } from './list/show-list.component';
import { ShowAddComponent } from './add/show-add.component';
import { ShowEditComponent } from './edit/show-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ShowListComponent
    },
    {
        path: 'add',
        component: ShowAddComponent
    },
    {
        path: ':id',
        component:  ShowEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
