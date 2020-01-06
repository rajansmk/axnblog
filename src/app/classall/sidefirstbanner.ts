import {Component,OnInit,AfterViewInit} from '@angular/core'

    @Component({
      
      selector: 'google-adsense',
      template: ` <div>
      <ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-1641765551962000"
      data-ad-slot="4223929629"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
             </div>
                <br>            
      `,

    })

    export class TopBannerComponent implements AfterViewInit {

      constructor() {    
      } 

      ngAfterViewInit() {
         setTimeout(()=>{
          try{
            (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
          }catch(e){
            console.error("error");
          }
        },50);
     }     
    }