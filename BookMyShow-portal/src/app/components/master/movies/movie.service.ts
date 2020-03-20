import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { AbstractMovie } from './domain/abstract-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService extends AbstractMovie{

  url: string = 'https://localhost:44352';
  movieData: any;
  result:any;
 
 
  constructor(private http: HttpClient) {super() }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; 
  
 
  

}
