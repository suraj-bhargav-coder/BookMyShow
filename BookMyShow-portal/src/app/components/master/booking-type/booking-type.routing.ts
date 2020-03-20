import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingTypeListComponent } from './list/booking-type-list.component';
import { BookingTypeAddComponent } from './add/booking-type-add.component';
import { BookingTypeEditComponent } from './edit/booking-type-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: BookingTypeListComponent
    },
    {
        path: 'add',
        component: BookingTypeAddComponent
    },
    {
        path: ':id',
        component:  BookingTypeEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
