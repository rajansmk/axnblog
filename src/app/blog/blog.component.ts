import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import{Meta,Title} from "@angular/platform-browser";
import { MetaserviceService } from '../metaservice.service';

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
   href :string;
   urlkeyworkd:string;

   title:string;
   keywords:string;
   description:string;
  

  constructor(private dataService: DataserviceService,private route: ActivatedRoute,private location: Location,private meteservice:MetaserviceService,private router:Router ) {
    // title.setTitle(this.dataService.gettingheader);
    
    // meta.addTags([
    //   { name: 'author',   content: 'axn1.com'},
    //   { name: 'keywords', content: this.dataService.gettingheader},
    //   { name: 'description', content: this.dataService.gettingheaderdesc }
    // ]);

    this.route.queryParams.subscribe(params => {
     let param = this.router.parseUrl(this.router.url);
     this.href = this.router.url;
     this.urlkeyworkd = this.href.substr(1);
     console.log(this.href);
     console.log(this.urlkeyworkd);

      // this.blogid = this.route.snapshot.params.blogid;
      // this.header = this.route.snapshot.params.header;
      this.blogid = this.dataService.gettingblogid;
      //this.seourl = param.queryParams.seourl;
     // this.header = this.route.snapshot.params.header;
      

      
  });

    dataService.getBlogId(this.blogid,this.urlkeyworkd).subscribe(response =>
      {
        this.blogs = response.map(item =>
        {
          this.meteservice.tagCreation(item.blog_header, 
            item.blog_headerdesc,item.meta_keywords
          )

          
          return new Blog(
            item.blogid,
            item.blog_desc,
              item.blog_header,
              item.blog_headerdesc,
              item.blog_keywords,
              item.created_date,
              item.catid,
              item.groupid,
              item.meta_keywords
              

          );

          

        });

           

      });
   }

  ngOnInit() {
    // let param = this.router.parseUrl(this.router.url);
    // console.log(param.queryParams.blogid)
   

  }
 
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
