import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../blog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = new Array<Blog>();
   blogid:number;
  

  constructor(private dataService: DataserviceService,private route: ActivatedRoute ) {
    this.route.queryParams.subscribe(params => {
      this.blogid = this.route.snapshot.params.blogid;
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
  }
 

}
