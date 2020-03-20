import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ScreenBase {

//#region screenId Prop
        @prop()
        screenId : number;
//#endregion screenId Prop


//#region screenNumber Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        screenNumber : number;
//#endregion screenNumber Prop


//#region seatNumber Prop
        @prop()
        seatNumber : number;
//#endregion seatNumber Prop

}