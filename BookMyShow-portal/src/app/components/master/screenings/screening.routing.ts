import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreeningListComponent } from './list/screening-list.component';
import { ScreeningAddComponent } from './add/screening-add.component';
import { ScreeningEditComponent } from './edit/screening-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ScreeningListComponent
    },
    {
        path: 'add',
        component: ScreeningAddComponent
    },
    {
        path: ':id',
        component:  ScreeningEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
