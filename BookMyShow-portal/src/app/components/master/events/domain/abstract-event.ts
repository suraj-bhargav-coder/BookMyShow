import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Event } from 'src/app/models/extended-models';

export class AbstractEvent extends RxHttp {
    eventFormGroup: IFormGroup<Event>
}
