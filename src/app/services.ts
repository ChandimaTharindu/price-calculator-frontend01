import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
  })


export class services {
 


  constructor(protected httpClient: HttpClient) { }
  
  getTable(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/api_product/getAllPraduct');
  }

}
