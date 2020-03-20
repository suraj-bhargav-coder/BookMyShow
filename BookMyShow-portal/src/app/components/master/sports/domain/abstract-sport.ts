import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Sport } from 'src/app/models/extended-models';

export class AbstractSport extends RxHttp {
    sportFormGroup: IFormGroup<Sport>
}
