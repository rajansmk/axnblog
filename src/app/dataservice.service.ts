import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from './blog';
import {Bloghome} from './classall/bloghome';
import { Category } from './classall/category';
import { Autocomplete } from './classall/autocomplete';
import { BlogUser } from './classall/blog-user';
import { Comments } from './classall/comments';
import { map } from 'rxjs/operators';
import { Savecomments } from './classall/savecomment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
 baseUrl:string = "https://www.mtutorial.com";
//baseUrl:string = "http://localhost/uat/axn";

   //hide the parameter id in url and show
  _blogid: number;
  _blogheader:string;
  _blogheaderdesc:string;
  _catid: number;

  constructor(private httpClient : HttpClient) { }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/api/getdata.php');
}
public getBlog(catid): Observable<Bloghome[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Bloghome[]>(this.baseUrl + '/api/getdata.php?'+ 'catid=' + catid);
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
  public getComments(blogid: number): Observable<Comments[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Comments[]>(
      this.baseUrl + '/api/blogcomments.php?'+ 'blogid=' + blogid 
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

  //catid maintain
  set setcatid(value: number) {
    this._catid = value;
 }
 get getcatid(): number {
  return this._catid;
}
  //end
  //google authentication
  saveBlogUser(bloguser: BlogUser): Observable<BlogUser[]> {
    return this.httpClient.post<BlogUser[]>(this.baseUrl + '/api/savebloguser.php', bloguser);
      
  }
  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }

  //comment save
  
  saveComment(comments: Savecomments) {
    return this.httpClient.post(this.baseUrl + '/api/savecomment.php', comments)
      .pipe(map(
        response => {
          return response;
        }));
  }
  //comment
  


}
