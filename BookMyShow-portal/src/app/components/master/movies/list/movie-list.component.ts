import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMovie } from '../domain/abstract-movie';
import { Movie } from "src/app/models/extended-models";
import { Subscription } from 'rxjs';
import { anonymous } from '@rxweb/angular-router';
import {MovieService} from 'src/app/components/master/movies/movie.service'

@anonymous()
@Component({
    selector:"app-movie-list",
    templateUrl:'./movie-list.component.html'
})
export class MovieListComponent extends AbstractMovie implements OnInit {
 
    movies: List<Movie>;
    // subscription: Subscription;
   list:any;
constructor(private movieService: MovieService){
    super();
}



    
    ngOnInit(): void {
        //debugger
        this.get().subscribe(res=>{this.list=res
            //debugger;
            console.log(res);})


        // .subscribe((t: List<Movie>) => { console.log(t)
        //     this.movies = t;
        // })

        // this.studentService.get().subscribe(
        //     studentData =>{this.arr=studentData}



    }


    // ngOnDestroy(): void {
    //     if (this.subscription)
    //         this.subscription.unsubscribe();
    // }

}
