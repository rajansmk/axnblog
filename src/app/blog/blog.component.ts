import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import{Meta,Title} from "@angular/platform-browser";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = new Array<Blog>();
   blogid:number;
   header:string;
   seourl:string;
  

  constructor(private dataService: DataserviceService,private route: ActivatedRoute,private location: Location,meta: Meta, title: Title,private router:Router ) {
    title.setTitle(this.dataService.gettingheader);

    meta.addTags([
      { name: 'author',   content: 'axn1.com'},
      { name: 'keywords', content: this.dataService.gettingheader},
      { name: 'description', content: this.dataService.gettingheaderdesc }
    ]);

    this.route.queryParams.subscribe(params => {
     let param = this.router.parseUrl(this.router.url);

      // this.blogid = this.route.snapshot.params.blogid;
      // this.header = this.route.snapshot.params.header;
      this.blogid = this.dataService.gettingblogid;
      //this.seourl = param.queryParams.seourl;
     // this.header = this.route.snapshot.params.header;
      

      
  });

    dataService.getBlogId(this.blogid).subscribe(response =>
      {
        this.blogs = response.map(item =>
        {
          return new Blog(
            item.blogid,
            item.blog_desc,
              item.blog_header,
              item.blog_headerdesc,
              item.blog_keywords,
              item.created_date,
              item.catid,
              item.groupid,
              

          );

          

        });

           

      });
   }

  ngOnInit() {
    let param = this.router.parseUrl(this.router.url);
    console.log(param.queryParams.blogid)
  }
 
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
