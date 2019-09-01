import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog';
import { DataserviceService } from '../../dataservice.service'
import{Meta,Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  items = new Array<Blog>();
  pageOfItems: Array<any>;

  constructor(private dataService: DataserviceService,meta: Meta, title: Title) { 
    title.setTitle('My Spiffy Home Page');

    meta.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);

    // this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    // this.meta.updateTag({ name: 'twitter:site', content: '@angularfirebase' });
    // this.meta.updateTag({ name: 'twitter:title', content: config.title });
    // this.meta.updateTag({ name: 'twitter:description', content: config.description });
    // this.meta.updateTag({ name: 'twitter:image', content: config.image });

    // this.meta.updateTag({ property: 'og:type', content: 'article' });
    // this.meta.updateTag({ property: 'og:site_name', content: 'AngularFirebase' });
    // this.meta.updateTag({ property: 'og:title', content: config.title });
    // this.meta.updateTag({ property: 'og:description', content: config.description });
    // this.meta.updateTag({ property: 'og:image', content: config.image });
    // this.meta.updateTag({ property: 'og:url', content: `https://instafire-app.firebaseapp.com/${config.slug}` });
    

    dataService.getEmployees().subscribe(response =>
      {
        this.items = response.map(item =>
        {
          return new Blog(
            item.blogid,
            item.blog_desc,
              item.blog_header,
              item.blog_headerdesc,
              
              item.blog_keywords,
              item.created_date,
              item.groupid,
              item.catid,
              

          );
        });
      });
  }

  

  ngOnInit() {
  }
//paging
onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}

}
