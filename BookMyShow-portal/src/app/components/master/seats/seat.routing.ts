import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatListComponent } from './list/seat-list.component';
import { SeatAddComponent } from './add/seat-add.component';
import { SeatEditComponent } from './edit/seat-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: SeatListComponent
    },
    {
        path: 'add',
        component: SeatAddComponent
    },
    {
        path: ':id',
        component:  SeatEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
