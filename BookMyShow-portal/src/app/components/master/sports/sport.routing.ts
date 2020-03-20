import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportListComponent } from './list/sport-list.component';
import { SportAddComponent } from './add/sport-add.component';
import { SportEditComponent } from './edit/sport-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: SportListComponent
    },
    {
        path: 'add',
        component: SportAddComponent
    },
    {
        path: ':id',
        component:  SportEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
