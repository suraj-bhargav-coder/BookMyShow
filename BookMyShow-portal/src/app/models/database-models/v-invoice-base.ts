import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vInvoiceBase {

//#region movieName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'movieName', keyColumn: false})
        movieName : string;
//#endregion movieName Prop


//#region multiplexName Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'multiplexName', keyColumn: false})
        multiplexName : string;
//#endregion multiplexName Prop


//#region multiplexLocation Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'multiplexLocation', keyColumn: false})
        multiplexLocation : string;
//#endregion multiplexLocation Prop


//#region seatNumber Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'seatNumber', keyColumn: false})
        seatNumber : any;
//#endregion seatNumber Prop


//#region subTotal Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'subTotal', keyColumn: false})
        subTotal : number;
//#endregion subTotal Prop


//#region amountPayble Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'amountPayble', keyColumn: false})
        amountPayble : number;
//#endregion amountPayble Prop

}