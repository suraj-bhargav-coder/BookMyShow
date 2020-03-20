import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Show } from 'src/app/models/extended-models';

export class AbstractShow extends RxHttp {
    showFormGroup: IFormGroup<Show>
}
