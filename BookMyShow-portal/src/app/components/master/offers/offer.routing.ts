import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferListComponent } from './list/offer-list.component';
import { OfferAddComponent } from './add/offer-add.component';
import { OfferEditComponent } from './edit/offer-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: OfferListComponent
    },
    {
        path: 'add',
        component: OfferAddComponent
    },
    {
        path: ':id',
        component:  OfferEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
