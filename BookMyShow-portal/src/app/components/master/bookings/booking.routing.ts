import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingListComponent } from './list/booking-list.component';
import { BookingAddComponent } from './add/booking-add.component';
import { BookingEditComponent } from './edit/booking-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BookingListComponent
    },
    {
        path: 'add',
        component: BookingAddComponent
    },
    {
        path: ':id',
        component:  BookingEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
