import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCityLookupBase {

//#region applicationObjectId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'applicationObjectId', keyColumn: true})
        applicationObjectId : number;
//#endregion applicationObjectId Prop


//#region applicationObjectName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'applicationObjectName', keyColumn: false})
        applicationObjectName : string;
//#endregion applicationObjectName Prop

}