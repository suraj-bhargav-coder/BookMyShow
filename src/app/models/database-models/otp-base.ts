import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class OtpBase {

//#region otpId Prop
        @prop()
        otpId : number;
//#endregion otpId Prop


//#region otp Prop
        @range({minimumNumber:1,maximumNumber:2147483647})
        @required()
        otp : number;
//#endregion otp Prop


//#region mobileNumber Prop
        @required()
        @maxLength({value:20})
        mobileNumber : string;
//#endregion mobileNumber Prop


//#region otpDuration Prop
        @prop()
        otpDuration : any;
//#endregion otpDuration Prop

}