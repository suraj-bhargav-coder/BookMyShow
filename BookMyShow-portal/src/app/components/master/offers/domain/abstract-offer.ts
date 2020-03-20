import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Offer } from 'src/app/models/extended-models';

export class AbstractOffer extends RxHttp {
    offerFormGroup: IFormGroup<Offer>
}
