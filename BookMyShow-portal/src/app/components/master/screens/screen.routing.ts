import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenListComponent } from './list/screen-list.component';
import { ScreenAddComponent } from './add/screen-add.component';
import { ScreenEditComponent } from './edit/screen-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ScreenListComponent
    },
    {
        path: 'add',
        component: ScreenAddComponent
    },
    {
        path: ':id',
        component:  ScreenEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
