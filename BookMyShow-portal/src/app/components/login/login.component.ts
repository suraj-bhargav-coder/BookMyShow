import { Component, OnInit } from '@angular/core';
import { anonymous, middleware } from '@rxweb/angular-router'
import { multilingual } from '@rxweb/localization'
import { CoreComponent } from '@rxweb/angular-router';
import { LoggedInMiddleware } from '../../domain/security/middleware/logged-in.middleware';
import { BrowserStorage } from 'src/app/domain/services/browser-storage';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserCredentialModel } from 'src/app/models/view-models/user-credential-model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';


@multilingual("loginComponent")
@anonymous()
@Component({
    templateUrl: './login.component.html',
})


export class LoginComponent extends CoreComponent implements OnInit {

    
    loginform: FormGroup;
    constructor(private formbuilder: RxFormBuilder, private loginService: LoginService,private browserStorage:BrowserStorage) {
        super();
    }

    ngOnInit(): void {
  let userCredentialModel = new UserCredentialModel
        this.loginform = this.formbuilder.formGroup(userCredentialModel);
    


    }

    submit(){
    this.loginService.login(this.loginform.value).subscribe(res=>{
        debugger
        this.browserStorage.local.save("auth",res,false);
    })
    }

}
