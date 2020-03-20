import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Multiplex } from 'src/app/models/extended-models';

export class AbstractMultiplex extends RxHttp {
    multiplexFormGroup: IFormGroup<Multiplex>
}
