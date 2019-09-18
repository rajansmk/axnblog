import { Component, ViewChild,ContentChild, AfterViewInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Category } from './classall/category';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HomeComponent]
})
export class AppComponent {
  allcount:string;
  @ContentChild(HomeComponent,{static: false}) private child: HomeComponent  ;

  Category =new Array<Category>();
  constructor(private dataService: DataserviceService,private router:Router ) { 
  }
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
