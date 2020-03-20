import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vMovyBase {

//#region movieId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'movieId', keyColumn: true})
        movieId : number;
//#endregion movieId Prop


//#region movieName Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'movieName', keyColumn: false})
        movieName : string;
//#endregion movieName Prop


//#region movieSynopsis Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'movieSynopsis', keyColumn: false})
        movieSynopsis : string;
//#endregion movieSynopsis Prop


//#region movieStarCast Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'movieStarCast', keyColumn: false})
        movieStarCast : string;
//#endregion movieStarCast Prop


//#region movieCrew Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'movieCrew', keyColumn: false})
        movieCrew : string;
//#endregion movieCrew Prop


//#region movieType Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'movieType', keyColumn: false})
        movieType : string;
//#endregion movieType Prop


//#region movieRating Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'movieRating', keyColumn: false})
        movieRating : any;
//#endregion movieRating Prop

}