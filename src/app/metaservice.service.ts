import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaserviceService {

  constructor(private meta: Meta,private title:Title) { }
  tagCreation(blogtitle,blogdesc,blogkeyword) {
    // default values
    // config = { 
    //   title: 'Angular 8,asp.net core tutorial', 
    //   description: 'Tutorial of asp.net core and angular tutorial', 
    //   image: 'http://axn1/images/logo.png',
    //   slug: '',
    //   keywords: '',
    //   ...config
    // }

     this.title.setTitle(blogtitle);
    
    
    this.meta.updateTag({ name: 'author', content: 'axn1.com' });
    this.meta.updateTag({ name: 'keywords', content: blogkeyword });
    this.meta.updateTag({ name: 'description', content: blogdesc });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'axn1.com' });
    this.meta.updateTag({ name: 'twitter:title', content: blogtitle });
    this.meta.updateTag({ name: 'twitter:description', content: blogdesc });
    this.meta.updateTag({ name: 'twitter:image', content: '' });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'axn1.com' });
    this.meta.updateTag({ property: 'og:title', content: blogtitle });
    this.meta.updateTag({ property: 'og:description', content: blogdesc });
    this.meta.updateTag({ property: 'og:image', content: '' });
    this.meta.updateTag({ property: 'og:url', content: '' });
  }
}
