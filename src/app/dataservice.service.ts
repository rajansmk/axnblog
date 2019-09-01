import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from './blog';
import {Bloghome} from './classall/bloghome';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseUrl:string = "http://localhost/uat/axn/api";

  constructor(private httpClient : HttpClient) { }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/getdata.php');
}
public getBlog(): Observable<Bloghome[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Bloghome[]>(this.baseUrl + '/getdata.php');
  }
  public getBlogId(blogid: number): Observable<Blog[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Blog[]>(this.baseUrl + '/getdataone.php?'+ 'blogid=' + blogid);
  }

}
