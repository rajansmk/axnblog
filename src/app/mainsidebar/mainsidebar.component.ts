import { Component, OnInit, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Category } from '../classall/category';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainsidebar',
  templateUrl: './mainsidebar.component.html',
  styleUrls: ['./mainsidebar.component.css']
})
@Injectable()
export class MainsidebarComponent implements OnInit {
  allcount:string;
  
  userid:number;
  loginbtn:boolean;
  logoutbtn:boolean;
  Category =new Array<Category>();
  constructor(private dataService: DataserviceService,private router:Router) { }
  @ViewChild('sidenave',{static:false}) sidenave: ElementRef;
  ngOnInit() {

    this.dataService.get_category().subscribe(response =>
      {
        this.Category = response.map(item =>
        {
          this.allcount=item.allcount;

          return new Category(
            item.catid,
              item.name,
              item.categorycount,
              item.allcount
              

          );
        });
       
      });
  }
  Maincategory(catid) {
    this.dataService.setcatid=catid;
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
   //this.child.getblogcatfilter(catid);
  // this.router.navigateByUrl('/');
  this.router.navigateByUrl("/")
  .then(() => {
    this.router.navigated = false;
    this.router.navigate(["/"]);
  });
        return ;
  }
  
  

}