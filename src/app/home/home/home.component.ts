import { Component,Input, Output, EventEmitter,  OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {Blog} from '../../blog';
import {Bloghome} from '../../classall/bloghome';
import { DataserviceService } from '../../dataservice.service'
import{Meta,Title} from "@angular/platform-browser";
import { Router } from '@angular/router';
import { MetaserviceService } from 'src/app/metaservice.service';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PagerServiceService } from 'src/app/pager-service.service';
import { Autocomplete } from 'src/app/classall/autocomplete';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  meta_keywords:string;
   keyword:string[];
   public ProductDetails: object = [];

  pageItems = new Array<Bloghome>();
  pageOfItems: Array<any>;
  pagedItems: any[];
  pageno :number =1;
  catid :number =0 ;

  autoCompletArr = new Array<Autocomplete>();


 
  @Output() changePage = new EventEmitter<any>(true);
  //@Input() initialPage =1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager: any = {};
 // paged items
   // pagedItems: any[];

  constructor(private dataService: DataserviceService,private pagerService: PagerServiceService,private metservice:MetaserviceService,private router:Router) { 
    // title.setTitle('Angular 8,asp.net core tutorial');
    if(this.pagerService.getpageno)
    {
      this.pageno=pagerService.getpageno;
    }
    // meta.addTags([
    //   { name: 'author',   content: 'axn1.com'},
    //   { name: 'keywords', content: 'angular8 tutorial, asp.net web api,asp.net core,asp.net core web api'},
    //   { name: 'description', content: 'Tutorial of asp.net core and angular tutorial' }
    // ]);

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
    

    
  }

  

  ngOnInit() {
    $(document).on('click', function (event) {
      if (!$(event.target).closest('#spnauto').length ) {
        $('#ulautocomplete').hide();
      }
      else{
        $('#ulautocomplete').show();
      }
      
    });
    if(this.dataService.getcatid ==undefined)
    {
      this.catid =0;
    }
    else{
      this.catid = this.dataService.getcatid;
    }
    
    
    this.dataService.getBlog(this.catid).subscribe(response =>
      {
        this.pageItems = response.map(item =>
        {
          // this.meta_keywords=item.meta_keywords;
          // var splitted  = this.meta_keywords.split(',');
          // this.keyword=splitted;
          this.dataService.setblogid=item.blogid;
          this.dataService.setheader=item.blog_header;
          this.dataService.setheaderdesc=item.blog_headerdesc;

          return new Bloghome(
            item.blogid,
              item.blog_header,
              item.blog_headerdesc,
              item.blog_keywords,
              item.created_date,
              item.name,
              item.meta_keywords
              

          );
        });
        this.setPage(this.pageno);
      });
      
     
    this.metservice.tagCreation('Angular 8,asp.net core tutorial','Tutorial of asp.net core and angular tutorial',
    'angular tutorial,angular 8,asp.net core tutorial,asp.net mvc','')
  }
//paging
// onChangePage(pageOfItems: Array<any>,currentpage) {
//   // update current page of items
//   this.pageOfItems = pageOfItems;
//   console.log(currentpage);
  
// }

Mainrouting( blogid,seourl,header,headerdesc)
{
  
  // this.dataService.setblogid=blogid;
  // this.dataService.setheader=header;
  // this.dataService.setheaderdesc=headerdesc;
  // this.router.navigate(['blog/'+seourl]);
  this.router.navigate([seourl]);
}

setPage(page: number) {
  // get pager object from service
  this.pager = this.pagerService.getPager(this.pageItems.length, page);
  this.pagerService.setpageno=page;

  // get current page of items
  this.pagedItems = this.pageItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}


getUserIdsFirstWay($event) {
  let search = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
  // this.userList1 = [];

  // if (userId.length > 2) {
  //   if ($event.timeStamp - this.lastkeydown1 > 200) {
  //     this.userList1 = this.searchFromArray(this.userData, userId);
  //   }
  // }
  if (search.length > 2) {
  this.dataService.autoComplete(search).subscribe(response =>
    {
      this.autoCompletArr = response.map(item =>
      {
        

        return new Autocomplete(
          item.blogid,
            item.blog_header,
            item.blog_keywords
            

        );
      });
     
    });
  }
 
    
   
 
}


 getblogcatfilter(catid) 
{
  this.router.navigateByUrl('/');
}

// searchFromArray(arr, regex) {
//   let matches = [], i;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].match(regex)) {
//       matches.push(arr[i]);
//     }
//   }
//   return matches;
// };

}


