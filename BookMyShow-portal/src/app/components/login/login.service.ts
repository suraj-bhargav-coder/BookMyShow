import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RxHttp } from '@rxweb/http';

@Injectable({
  providedIn: 'root'

})
export class LoginService {
  url: string = 'https://localhost:44352';
  result: any

  constructor(private http: RxHttp ) { }
  
  public  get() {

    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(this.url + '/api/Authentication').subscribe(res=> { 
           
             console.log(this.result);
      })
  }

  login(userCredentialModel: any) {
    return this.http.post<any>({ body: userCredentialModel, path: "/api/Authentication" })
     }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
  
  }

