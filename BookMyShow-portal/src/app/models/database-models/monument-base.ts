import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MonumentBase {

//#region monumentId Prop
        @prop()
        monumentId : number;
//#endregion monumentId Prop


//#region monumentName Prop
        @required()
        @maxLength({value:500})
        monumentName : string;
//#endregion monumentName Prop


//#region location Prop
        @required()
        @maxLength({value:5000})
        location : string;
//#endregion location Prop


//#region ticketPrice Prop
        @required()
        ticketPrice : number;
//#endregion ticketPrice Prop

}