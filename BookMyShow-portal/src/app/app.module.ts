import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { RxWebModule } from './rxweb.module'
import { AppComponent } from './components/start/app.component';
import { ROUTES } from './components/start/routing'
import { RxHttp } from '@rxweb/http';
import { BaseToastr } from './domain/customize-design/toastr';
import { ModalView } from './domain/customize-design/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { HttpClientModule } from '@angular/common/http';

const route = RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' });
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, route, RxWebModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,HttpClientModule
  ],
  providers: [RxHttp, BaseToastr, ModalView],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
