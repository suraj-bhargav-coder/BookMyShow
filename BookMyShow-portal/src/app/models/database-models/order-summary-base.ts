import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OrderSummaryBase {

//#region orderSummaryId Prop
        @prop()
        orderSummaryId : number;
//#endregion orderSummaryId Prop


//#region subTotal Prop
        @required()
        subTotal : number;
//#endregion subTotal Prop


//#region internetHandlingFees Prop
        @required()
        internetHandlingFees : number;
//#endregion internetHandlingFees Prop


//#region amountPayble Prop
        @required()
        amountPayble : number;
//#endregion amountPayble Prop

}