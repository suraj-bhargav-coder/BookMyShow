import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class EventBase {

//#region eventId Prop
        @prop()
        eventId : number;
//#endregion eventId Prop


//#region eventName Prop
        @required()
        @maxLength({value:50})
        eventName : string;
//#endregion eventName Prop


//#region eventTiming Prop
        @required()
        eventTiming : any;
//#endregion eventTiming Prop


//#region eventDate Prop
        @required()
        eventDate : any;
//#endregion eventDate Prop


//#region eventPlace Prop
        @required()
        @maxLength({value:50})
        eventPlace : string;
//#endregion eventPlace Prop


//#region eventHost Prop
        @required()
        @maxLength({value:50})
        eventHost : string;
//#endregion eventHost Prop


//#region eventDescription Prop
        @required()
        @maxLength({value:500})
        eventDescription : string;
//#endregion eventDescription Prop

}