import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ShowBase {

//#region showId Prop
        @prop()
        showId : number;
//#endregion showId Prop


//#region showStartTime Prop
        @required()
        showStartTime : any;
//#endregion showStartTime Prop


//#region showStopTime Prop
        @required()
        showStopTime : any;
//#endregion showStopTime Prop

}