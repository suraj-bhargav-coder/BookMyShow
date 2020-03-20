import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { User } from 'src/app/models/extended-models';

export class AbstractUser extends RxHttp {
    userFormGroup: IFormGroup<User>
}
