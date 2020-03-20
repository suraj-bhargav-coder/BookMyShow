import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderSummaryListComponent } from './list/order-summary-list.component';
import { OrderSummaryAddComponent } from './add/order-summary-add.component';
import { OrderSummaryEditComponent } from './edit/order-summary-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: OrderSummaryListComponent
    },
    {
        path: 'add',
        component: OrderSummaryAddComponent
    },
    {
        path: ':id',
        component:  OrderSummaryEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
