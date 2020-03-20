import { required, email } from '@rxweb/reactive-form-validators';

export class UserCredentialModel {
    @required()
    @email()
    userName: string = undefined;
    @required()
    password: string = undefined;
 
   
}
