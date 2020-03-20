import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './movie.routing'

import { MovieListComponent } from './list/movie-list.component'
import { MovieEditComponent } from './edit/movie-edit.component';
import { MovieAddComponent } from './add/movie-add.component';
import { MovieSharedModule } from './movie-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,MovieSharedModule,
        ROUTING
    ],
    declarations: [MovieListComponent,MovieEditComponent,MovieAddComponent],
    exports: [RouterModule],
    providers: []
})
export class MovieModule { }


