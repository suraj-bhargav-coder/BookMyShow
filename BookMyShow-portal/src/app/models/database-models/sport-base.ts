import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class SportBase {

//#region sportId Prop
        @prop()
        sportId : number;
//#endregion sportId Prop


//#region sportPlace Prop
        @required()
        @maxLength({value:200})
        sportPlace : string;
//#endregion sportPlace Prop


//#region sportName Prop
        @required()
        @maxLength({value:50})
        sportName : string;
//#endregion sportName Prop


//#region sportDate Prop
        @required()
        sportDate : any;
//#endregion sportDate Prop


//#region sportTime Prop
        @required()
        sportTime : any;
//#endregion sportTime Prop

}