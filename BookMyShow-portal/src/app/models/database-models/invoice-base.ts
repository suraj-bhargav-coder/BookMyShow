import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class InvoiceBase {

//#region invoiceId Prop
        @prop()
        invoiceId : number;
//#endregion invoiceId Prop


//#region invoiceNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        invoiceNumber : number;
//#endregion invoiceNumber Prop


//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop


//#region bookingId Prop
        @prop()
        bookingId : number;
//#endregion bookingId Prop

}