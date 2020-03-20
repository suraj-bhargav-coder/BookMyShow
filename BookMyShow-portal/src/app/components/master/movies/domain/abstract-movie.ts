import { RxHttp, http } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Movie } from 'src/app/models/extended-models';
import { CoreComponent } from '@rxweb/angular-router';

@http({
    path: "api/Movies",
})
export class AbstractMovie extends CoreComponent {
    movieFormGroup: IFormGroup<Movie>
}
