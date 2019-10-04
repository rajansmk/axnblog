import { Component, OnInit, Renderer2, Inject, ElementRef } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Location } from '@angular/common';
import{Meta,Title} from "@angular/platform-browser";
import { MetaserviceService } from '../metaservice.service';
import { PagerServiceService } from '../pager-service.service';
import { Bloghome } from '../classall/bloghome';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { HighlightResult } from 'ngx-highlightjs';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { Comments } from '../classall/comments';
import { Savecomments } from '../classall/savecomment';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = new Array<Blog>();
  blogscategory = new Array<Bloghome>();
   comment =  new Array<Comments>();
   blogid:number;
   header:string;
   seourl:string;
   href :string;
   urlkeyworkd:string;

   title:string;
   keywords:string;
   description:string;

   meta_keywords:string;
   keyword:string[];

  relatedcategoryid:number;

   pageno:number;
   hide:boolean =false;
   strComment: string;

  //  jsonLD: SafeHtml;
  //  strhtml:string;
   
   //structured data
   
  

  constructor(private _elementRef : ElementRef,private _renderer2: Renderer2 ,@Inject(DOCUMENT) private _document: Document,private sanitizer: DomSanitizer,private dataService: DataserviceService,private pageservice: PagerServiceService,private route: ActivatedRoute,private location: Location,private meteservice:MetaserviceService,private router:Router )
   {
    // title.setTitle(this.dataService.gettingheader);
    
    // meta.addTags([
    //   { name: 'author',   content: 'axn1.com'},
    //   { name: 'keywords', content: this.dataService.gettingheader},
    //   { name: 'description', content: this.dataService.gettingheaderdesc }
    // ]);

   


     



      
     
   }

  ngOnInit() {

    //this._renderer2.appendChild(this._document.body, this.jsonLD);
    // let param = this.router.parseUrl(this.router.url);
    // console.log(param.queryParams.blogid)
    //this.meta_keywords = this.blogs.map((item)=> item.meta_keywords);
    
   // console.log(this.meta_keywords);

   // related category
   this.route.queryParams.subscribe(params => {
    let param = this.router.parseUrl(this.router.url);
    this.href = this.router.url;
    this.urlkeyworkd = this.href.substr(1);
   // console.log(this.href);
    //console.log(this.urlkeyworkd);

     // this.blogid = this.route.snapshot.params.blogid;
     // this.header = this.route.snapshot.params.header;
     this.blogid = this.dataService.gettingblogid;
     this.pageno = this.pageservice.getpageno;
     //this.seourl = param.queryParams.seourl;
    // this.header = this.route.snapshot.params.header;
     

     
 });

   this.dataService.getBlogId(this.blogid,this.urlkeyworkd).subscribe(response =>
     {
       //redirect home component if data null
       if(response.length==0)
       {
         this.router.navigateByUrl('/');
         return;
       }
       this.blogs = response.map(item =>
       {

        this.blogid=item.blogid;
        this.dataService.setblogid=item.blogid;
         this.meteservice.tagCreation(item.blog_header, 
           item.blog_headerdesc,item.meta_keywords,item.blog_keywords
         )
         this.meta_keywords=item.meta_keywords;
         var splitted  = this.meta_keywords.split(',');
         this.keyword=splitted;
         this.relatedcategoryid=item.catid;
         //console.log(splitted);
         this.title=item.blog_header;
         this.description=item.blog_headerdesc;

         var me = document.getElementById('myscript');
    let s;
    if(me ==undefined)
    {
       s = this._renderer2.createElement('script');
    }
    else{
       s = me;
    }
    
        // let s = this._renderer2.createElement('script');
         //let s = this._elementRef.nativeElement.querySelector('myscript');
         s.type = `application/ld+json`;
         s.id= `myscript`;
         s.text = `
             {
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "http://www.mtutorial.com/`+item.blog_keywords+`"
              },
              "headline": `+`"`+this.title+`",
              "image": [
                "http://www.mtutorial.com/mtutorial.jpg"
               ],
              "datePublished": "2015-02-05T08:00:00+08:00",
              "dateModified": "2015-02-05T09:20:00+08:00",
              "author": {
                "@type": "Person",
                "name": "M-Tutorial"
              },
               "publisher": {
                "@type": "Organization",
                "name": "M - Tutorial",
                "logo": {
                  "@type": "ImageObject",
                  "url": "http://www.mtutorial.com/mtutorial.jpg"
                }
              },
              "description": `+`"`+this.description+`"
             }
         `;

         var me = document.getElementById('mylink');
         let link: HTMLLinkElement;
         if(me ==undefined)
         {
           link = this._document.createElement('link');
              // let link: HTMLLinkElement = this._document.createElement('link');
           link.setAttribute('rel', 'canonical');
           link.setAttribute('id', 'mylink');
           this._document.head.appendChild(link);
           link.setAttribute('href', this._document.URL);
         }
         else{
           me.setAttribute('rel', 'canonical');
           me.setAttribute('id', 'mylink');
           this._document.head.appendChild(me);
           me.setAttribute('href', this._document.URL);
           
              
     }

         this._renderer2.appendChild(this._document.head, s);
         
         this.dataService.getComments(this.blogid).subscribe(response =>
          {
            this.comment = response.map(item =>
              {
                return new Comments(
                  item.commentid,
                  item.comment,
                  item.created_date,
                  item.fullname,
                  item.img
                    
       
                );
            
            
          });

          });
         
       //  var script = '<script type="text/javascript">' +JSON.stringify(json) + '</script>';
        // this.strhtml = this.getSafeHTML(json);
       // this.strhtml=this.jsonLD
       // document.getElementsByTagName('head')[0].appendChild(jsonLD);
       // this._renderer2.appendChild(this._document.body, this.jsonLD);
      //  $('head').append(script);
       // document.getElementsByTagName('head')[0].appendChild(script);
        // const html = `<script type="application/ld+json">${this.getSafeHTML(json)}</script>`;
      //let  head = document.getElementsByTagName ("head")[0] || document.documentElement;
// Use insertBefore instead of appendChild to circumvent an IE6 bug.
// This arises when a base node is used (#2709 and #4378).
//head.insertBefore( this.jsonLD, head.firstChild);



         
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

       this.categorybind(this.relatedcategoryid);

     });


     if(this.dataService.isLoggedIn())
     {
       console.log("loggedin");
       this.hide=true;
     }
     else{
      this.hide=false;
     }
       
    
   

  }
  ngAfterViewInit() {
    nuss:Number;
  }

  // getSafeHTML(value: {}) {
  //   // If value convert to JSON and escape / to prevent script tag in JSON
  //  // const json = value ? JSON.stringify(value, null, 2).replace(/\//g, '\\/') : '';
  //   const json = value ? JSON.stringify(value, null, 2) : '';
  //   const html = `<script type="application/ld+json">${json}</script>`;
  //   //const html = `${json}`;
  //   //return this.sanitizer.bypassSecurityTrustHtml(html);
  //   return html;
  // }
 
  cancel(pageno) {
    this.pageservice.setpageno=pageno;

    if(pageno ==undefined)
    {
      this.router.navigateByUrl('/');
    }
    else{
      this.location.back(); // <-- go back to previous location on cancel
    }
  }


  categorybind(categoryid)
  {
    this.dataService.getBlog(categoryid).subscribe(response =>
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
              item.catid
              
  
          );
        });
       
      });
  }


  urlRoute(urlpath) {
    
    this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
   //this.child.getblogcatfilter(catid);
  // this.router.navigateByUrl('/');
  this.router.navigateByUrl(urlpath)
  .then(() => {
    this.router.navigated = false;
    this.router.navigate([urlpath]);
  });
        return ;
  }

  //comment
  sendValues(value: string) {
    let comments = new Savecomments();
    comments.commentid=0;
    comments.comment=value;
    comments.userid =this.dataService.getToken();
    comments.blogid=this.dataService.gettingblogid
    console.log(comments);
    this.dataService.saveComment(comments)
        .subscribe((response: Comments) => {
          console.log(response);
          //this.userid=response.userid;
          window.location.href = window.location.href;
        });
   // do sth with the str e.g. console.log(this.strComment);

    }


}
