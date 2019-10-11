import { Component, ViewChild,ContentChild, AfterViewInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Category } from './classall/category';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BlogUser } from './classall/blog-user';
import {AuthService,FacebookLoginProvider,GoogleLoginProvider} from 'angular-6-social-login';
import { min } from 'rxjs/operators';
import { observable } from 'rxjs';
import { MainsidebarComponent } from './mainsidebar/mainsidebar.component';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MainsidebarComponent]
})
export class AppComponent {
  allcount:string;
  bloguser:BlogUser[];
  userid:number;
  loginbtn:boolean;
  logoutbtn:boolean;
  rightSideNav : boolean ;
  // @ContentChild(MainsidebarComponent,{static: false}) private child: MainsidebarComponent  ;
  
  Category =new Array<Category>();
  constructor( private socialAuthService: AuthService,private dataService: DataserviceService,private router:Router ) { 
  }
 
  ngOnInit() {

  
      

  
  }
  
  
 
   
    //sample data
//     email: "maharajan.airtel@gmail.com"
// id: "114015666728879194169"
// idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiMGJmMTg2NzQzNDcxYTFlZGNhYzMwNjBkMTI1NmY5ZTQwNTBiYTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzg1MTQ2NDQxNDA4LXZiOGQ0NTU1YjNhN2JpZDlxY3NzNWFhcm02Ym5sdmNuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzg1MTQ2NDQxNDA4LXZiOGQ0NTU1YjNhN2JpZDlxY3NzNWFhcm02Ym5sdmNuLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MDE1NjY2NzI4ODc5MTk0MTY5IiwiZW1haWwiOiJtYWhhcmFqYW4uYWlydGVsQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiOWt1bXJ2VlAwOUxUVFFWV3o1MmNqUSIsIm5hbWUiOiJtYWhhcmFqYW4gUCIsInBpY3R1cmUiOiJodHRwczovL2xoNS5nb29nbGV1c2VyY29udGVudC5jb20vLXIxMlJDQU9KSU04L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmN3Y0FDR2dia25wUV9pMVMyNmlhdm5PaHBpQ2cvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6Im1haGFyYWphbiIsImZhbWlseV9uYW1lIjoiUCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTY5NTI2MTk2LCJleHAiOjE1Njk1Mjk3OTYsImp0aSI6IjAwYjk3YjZkMTE2ZjM1NjNmNDlkY2MwZGM4MzY4ZWM4MjRmM2ZmNTUifQ.eWpbp7gHG66Y28djIYbzDzBbIZ7vcRi0G1YokjWtDF-_ruMln42PwM8btea0clMTzHIeJ1V0FVy5d-8t0aIY9rEc1xbXUrNKLjqIcuqnRhCmvJz59jtV_uqvW5Cfg_PMHnrtEDgW4EctMcXBqjT0ZmIdNifXF2_zXhQ_fRq8boUkoEdrvCwoUa_yPghVYvzR1juxw_LxiUx2YGAQLsLUrmyP1cV92QdrIkL5g4t6jco1zGeXHi37-hx2DjjAl8vsxu3Iwa5EnXkIW-ARE_nCwyRX1DtQu-JWpp2Ed41kGs5XwWO2juneytmY5hEkU3Ype-15OvD72oY8TfVFEE1w9w"
// image: "https://lh5.googleusercontent.com/-r12RCAOJIM8/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcwcACGgbknpQ_i1S26iavnOhpiCg/s96-c/photo.jpg"
// name: "maharajan P"
// provider: "google"
// token: "ya29.Il-PBy8nvPh8_HFUsoIMM5nQuz3eb9otzirVBkn3phw_Ku7R9CIffnvqIaCY4zOcRkYlNiHaouaFHBdwcsR-Z4p4VU_FaduHGPR8JCLv9dMKp5B-2efNgxzAdPY4Q2xcwA"


}
