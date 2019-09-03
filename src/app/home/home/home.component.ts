import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog';
import {Bloghome} from '../../classall/bloghome';
import { DataserviceService } from '../../dataservice.service'
import{Meta,Title} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  items = new Array<Bloghome>();
  pageOfItems: Array<any>;
 

  constructor(private dataService: DataserviceService,meta: Meta, title: Title,private router:Router) { 
    title.setTitle('Angular 8,asp.net core tutorial');

    meta.addTags([
      { name: 'author',   content: 'axn1.com'},
      { name: 'keywords', content: 'angular8 tutorial, asp.net web api,asp.net core,asp.net core web api'},
      { name: 'description', content: 'Tutorial of asp.net core and angular tutorial' }
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
    

    dataService.getBlog().subscribe(response =>
      {
        this.items = response.map(item =>
        {
          return new Bloghome(
            item.blogid,
              item.blog_header,
              item.blog_headerdesc,
              item.blog_keywords,
              item.name,
              

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

Mainrouting( blogid,seourl,header,headerdesc)
{
  
  this.dataService.setblogid=blogid;
  this.dataService.setheader=header;
  this.dataService.setheaderdesc=headerdesc;
  // this.router.navigate(['blog/'+seourl]);
  this.router.navigate([seourl]);
}

}
