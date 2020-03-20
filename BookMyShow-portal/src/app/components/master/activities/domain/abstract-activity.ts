import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Activity } from 'src/app/models/extended-models';

export class AbstractActivity extends RxHttp {
    activityFormGroup: IFormGroup<Activity>
}
