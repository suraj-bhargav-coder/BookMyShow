import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Screen } from 'src/app/models/extended-models';

export class AbstractScreen extends RxHttp {
    screenFormGroup: IFormGroup<Screen>
}
