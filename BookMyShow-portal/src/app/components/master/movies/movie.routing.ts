import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './list/movie-list.component';
import { MovieAddComponent } from './add/movie-add.component';
import { MovieEditComponent } from './edit/movie-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MovieListComponent
    },
    {
        path: 'add',
        component: MovieAddComponent
    },
    {
        path: ':id',
        component:  MovieEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
