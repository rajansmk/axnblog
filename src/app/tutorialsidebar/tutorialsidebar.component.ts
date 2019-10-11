import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Bloghome } from '../classall/bloghome';

@Component({
  selector: 'app-tutorialsidebar',
  templateUrl: './tutorialsidebar.component.html',
  styleUrls: ['./tutorialsidebar.component.css']
})
export class TutorialsidebarComponent implements OnInit {
urlpath:string;
blogscategory = new Array<Bloghome>();
  constructor(private dataService :DataserviceService) { }

  ngOnInit() {
    //this.catid = this.dataService.getcatid;
    this.urlpath=this.dataService.getUrlpath;
    this.category(this.urlpath);
  }

  category(urlpath)
  {
    this.dataService.getBlogthruUrl(urlpath).subscribe(response =>
      {
        this.blogscategory = response.map(item =>
        {
          return new Bloghome(
            item.blogid,
              item.blog_header,
              item.blog_headerdesc,
              item.blog_keywords,
              item.created_date,
              item.name,
              item.meta_keywords,
              item.catid,
              item.displayheader,
             item.posttypeid
              
  
          );
        });
       
      });
  }

}
