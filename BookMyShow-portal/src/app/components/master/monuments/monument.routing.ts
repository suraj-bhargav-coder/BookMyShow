import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentListComponent } from './list/monument-list.component';
import { MonumentAddComponent } from './add/monument-add.component';
import { MonumentEditComponent } from './edit/monument-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MonumentListComponent
    },
    {
        path: 'add',
        component: MonumentAddComponent
    },
    {
        path: ':id',
        component:  MonumentEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
