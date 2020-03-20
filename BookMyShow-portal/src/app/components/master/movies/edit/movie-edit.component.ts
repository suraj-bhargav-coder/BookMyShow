import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMovie } from '../domain/abstract-movie';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/models/extended-models';

@Component({
    selector: "app-movie-edit",
    templateUrl: './movie-edit.component.html'
})
export class MovieEditComponent extends AbstractMovie implements OnInit, OnDestroy {
    movie: Movie;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.movieFormGroup = this.formBuilder.formGroup(Movie,t) as IFormGroup<Movie>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
