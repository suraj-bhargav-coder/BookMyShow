import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpListComponent } from './list/otp-list.component';
import { OtpAddComponent } from './add/otp-add.component';
import { OtpEditComponent } from './edit/otp-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: OtpListComponent
    },
    {
        path: 'add',
        component: OtpAddComponent
    },
    {
        path: ':id',
        component:  OtpEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
