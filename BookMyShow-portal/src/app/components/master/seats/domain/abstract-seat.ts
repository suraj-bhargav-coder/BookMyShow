import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Seat } from 'src/app/models/extended-models';

export class AbstractSeat extends RxHttp {
    seatFormGroup: IFormGroup<Seat>
}
