import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventListComponent } from './list/event-list.component';
import { EventAddComponent } from './add/event-add.component';
import { EventEditComponent } from './edit/event-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: EventListComponent
    },
    {
        path: 'add',
        component: EventAddComponent
    },
    {
        path: ':id',
        component:  EventEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
