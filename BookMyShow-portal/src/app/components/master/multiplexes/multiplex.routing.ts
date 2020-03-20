import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiplexListComponent } from './list/multiplex-list.component';
import { MultiplexAddComponent } from './add/multiplex-add.component';
import { MultiplexEditComponent } from './edit/multiplex-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MultiplexListComponent
    },
    {
        path: 'add',
        component: MultiplexAddComponent
    },
    {
        path: ':id',
        component:  MultiplexEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
