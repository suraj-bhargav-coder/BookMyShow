import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Otp } from 'src/app/models/extended-models';

export class AbstractOtp extends RxHttp {
    otpFormGroup: IFormGroup<Otp>
}
