import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Booking } from 'src/app/models/extended-models';

export class AbstractBooking extends RxHttp {
    bookingFormGroup: IFormGroup<Booking>
}
