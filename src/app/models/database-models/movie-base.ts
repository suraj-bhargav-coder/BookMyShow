import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class MovieBase {

//#region movieId Prop
        @prop()
        movieId : number;
//#endregion movieId Prop


//#region movieName Prop
        @required()
        @maxLength({value:50})
        movieName : string;
//#endregion movieName Prop


//#region movieSynopsis Prop
        @required()
        @maxLength({value:500})
        movieSynopsis : string;
//#endregion movieSynopsis Prop


//#region movieStarCast Prop
        @required()
        @maxLength({value:200})
        movieStarCast : string;
//#endregion movieStarCast Prop


//#region movieCrew Prop
        @maxLength({value:200})
        movieCrew : string;
//#endregion movieCrew Prop


//#region movieType Prop
        @maxLength({value:50})
        movieType : string;
//#endregion movieType Prop


//#region movieRating Prop
        @prop()
        movieRating : number;
//#endregion movieRating Prop

}