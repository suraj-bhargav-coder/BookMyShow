import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MultiplexBase {

//#region multiplexId Prop
        @prop()
        multiplexId : number;
//#endregion multiplexId Prop


//#region multiplexName Prop
        @required()
        @maxLength({value:50})
        multiplexName : string;
//#endregion multiplexName Prop


//#region multiplexLocation Prop
        @required()
        @maxLength({value:200})
        multiplexLocation : string;
//#endregion multiplexLocation Prop


//#region multiplexDetail Prop
        @maxLength({value:500})
        multiplexDetail : string;
//#endregion multiplexDetail Prop

}