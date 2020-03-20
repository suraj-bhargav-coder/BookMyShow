import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ActivityBase {

//#region activityId Prop
        @prop()
        activityId : number;
//#endregion activityId Prop


//#region activityName Prop
        @required()
        @maxLength({value:50})
        activityName : string;
//#endregion activityName Prop


//#region venue Prop
        @required()
        @maxLength({value:5000})
        venue : string;
//#endregion venue Prop


//#region activityDate Prop
        @required()
        activityDate : any;
//#endregion activityDate Prop

}