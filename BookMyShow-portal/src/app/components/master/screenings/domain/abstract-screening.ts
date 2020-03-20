import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Screening } from 'src/app/models/extended-models';

export class AbstractScreening extends RxHttp {
    screeningFormGroup: IFormGroup<Screening>
}
