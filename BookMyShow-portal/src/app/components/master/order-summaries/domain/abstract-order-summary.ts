import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { OrderSummary } from 'src/app/models/extended-models';

export class AbstractOrderSummary extends RxHttp {
    orderSummaryFormGroup: IFormGroup<OrderSummary>
}
