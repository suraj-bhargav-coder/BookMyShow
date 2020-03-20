import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Invoice } from 'src/app/models/extended-models';

export class AbstractInvoice extends RxHttp {
    invoiceFormGroup: IFormGroup<Invoice>
}
