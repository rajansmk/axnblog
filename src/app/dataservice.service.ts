import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Blog} from './blog';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  baseUrl:string = "http://localhost/uat/axn";

  constructor(private httpClient : HttpClient) { }

  get_products(){
    return this.httpClient.get(this.baseUrl + '/getdata.php');
}
public getEmployees(): Observable<Blog[]>
  {
   // const url = 'http://localhost/uat/api/getdata.php';
 
    return this.httpClient.get<Blog[]>(this.baseUrl + '/getdata.php');
  }

}
