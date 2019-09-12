import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from './blog';
import {Bloghome} from './classall/bloghome';
import { Category } from './classall/category';
import { Autocomplete } from './classall/autocomplete';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseUrl:string = "http://www.mtutorial.com";
 // baseUrl:string = "http://localhost/uat/axn";

   //hide the parameter id in url and show
  _blogid: number;
  _blogheader:string;
  _blogheaderdesc:string;

  constructor(private httpClient : HttpClient) { }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/api/getdata.php');
}
public getBlog(): Observable<Bloghome[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Bloghome[]>(this.baseUrl + '/api/getdata.php');
  }
  public getBlogId(blogid: number,urlkeyword :string): Observable<Blog[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Blog[]>(
      this.baseUrl + '/api/getdataone.php?'+ 'blogid=' + blogid + '&urlkeyword=' + urlkeyword
      );
  }
 
  public get_category() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.baseUrl + '/api/getdataallcategory.php');
}
public autoComplete(search :string): Observable<Autocomplete[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Autocomplete[]>(
      this.baseUrl + '/api/autocomplete.php?'+ 'search=' + search 
      );
  }

  

  set setblogid(value: number) {
     this._blogid = value;
  }
  set setheader(value: string) {
    this._blogheader = value;
 }
 set setheaderdesc(value: string) {
  this._blogheaderdesc = value;
}

  get gettingblogid(): number {
      return this._blogid;
  }
  get gettingheader(): string {
    return this._blogheader;
}
get gettingheaderdesc(): string {
  return this._blogheaderdesc;
}
  //end blogid

}
