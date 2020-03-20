import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BookingTypeBase {

//#region bookingTypeId Prop
        @prop()
        bookingTypeId : number;
//#endregion bookingTypeId Prop


//#region category Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        category : number;
//#endregion category Prop

}