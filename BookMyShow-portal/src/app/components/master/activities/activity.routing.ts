import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityListComponent } from './list/activity-list.component';
import { ActivityAddComponent } from './add/activity-add.component';
import { ActivityEditComponent } from './edit/activity-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ActivityListComponent
    },
    {
        path: 'add',
        component: ActivityAddComponent
    },
    {
        path: ':id',
        component:  ActivityEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
