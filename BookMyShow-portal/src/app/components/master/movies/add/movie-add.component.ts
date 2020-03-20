import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Movie } from 'src/app/models/extended-models';
import { AbstractMovie } from '../domain/abstract-movie';

@Component({
    selector: "app-movie-add",
    templateUrl: './movie-add.component.html'
})
export class MovieAddComponent extends AbstractMovie implements OnInit, OnDestroy {
    movie: Movie;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.movie = new Movie();
        this.movieFormGroup = this.formBuilder.formGroup(this.movie) as IFormGroup<Movie>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
