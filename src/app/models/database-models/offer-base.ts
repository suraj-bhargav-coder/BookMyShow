import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OfferBase {

//#region offerId Prop
        @prop()
        offerId : number;
//#endregion offerId Prop


//#region offerDetail Prop
        @required()
        @maxLength({value:200})
        offerDetail : string;
//#endregion offerDetail Prop


//#region offerDiscount Prop
        @required()
        offerDiscount : number;
//#endregion offerDiscount Prop

}