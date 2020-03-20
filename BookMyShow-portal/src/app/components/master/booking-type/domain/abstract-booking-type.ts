import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { BookingType } from 'src/app/models/extended-models';

export class AbstractBookingType extends RxHttp {
    bookingTypeFormGroup: IFormGroup<BookingType>
}
