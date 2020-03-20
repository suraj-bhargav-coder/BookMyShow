import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceListComponent } from './list/invoice-list.component';
import { InvoiceAddComponent } from './add/invoice-add.component';
import { InvoiceEditComponent } from './edit/invoice-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: InvoiceListComponent
    },
    {
        path: 'add',
        component: InvoiceAddComponent
    },
    {
        path: ':id',
        component:  InvoiceEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
