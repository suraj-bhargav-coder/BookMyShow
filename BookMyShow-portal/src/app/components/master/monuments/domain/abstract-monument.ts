import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Monument } from 'src/app/models/extended-models';

export class AbstractMonument extends RxHttp {
    monumentFormGroup: IFormGroup<Monument>
}
