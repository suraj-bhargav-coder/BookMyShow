import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SeatBase {

//#region seatId Prop
        @prop()
        seatId : number;
//#endregion seatId Prop


//#region seatRow Prop
        @required()
        @maxLength({value:2})
        seatRow : string;
//#endregion seatRow Prop


//#region seatColumn Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        seatColumn : number;
//#endregion seatColumn Prop


//#region seatPrice Prop
        @required()
        seatPrice : number;
//#endregion seatPrice Prop


//#region screenId Prop
        @prop()
        screenId : number;
//#endregion screenId Prop

}