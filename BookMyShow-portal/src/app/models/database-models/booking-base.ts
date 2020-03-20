import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class BookingBase {

//#region bookingId Prop
        @prop()
        bookingId : number;
//#endregion bookingId Prop


//#region bookingDate Prop
        @required()
        bookingDate : any;
//#endregion bookingDate Prop


//#region showId Prop
        @prop()
        showId : number;
//#endregion showId Prop


//#region screeningId Prop
        @prop()
        screeningId : number;
//#endregion screeningId Prop


//#region bookingTypeId Prop
        @prop()
        bookingTypeId : number;
//#endregion bookingTypeId Prop


//#region userId Prop
        @prop()
        userId : number;
//#endregion userId Prop


//#region bookingTime Prop
        @prop()
        bookingTime : any;
//#endregion bookingTime Prop


//#region applicationObjectId Prop
        @prop()
        applicationObjectId : number;
//#endregion applicationObjectId Prop

}