import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class ScreeningBase {

//#region screeningId Prop
        @prop()
        screeningId : number;
//#endregion screeningId Prop


//#region movieId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        movieId : number;
//#endregion movieId Prop


//#region screenId Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        screenId : number;
//#endregion screenId Prop


//#region screeningTime Prop
        @prop()
        screeningTime : any;
//#endregion screeningTime Prop

}