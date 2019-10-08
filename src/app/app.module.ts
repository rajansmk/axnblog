import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { BlogComponent } from './blog/blog.component';
import { SafehtmlPipe } from './safehtml.pipe';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { MyJsonLd } from './my-json-ld';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { UserpostComponent } from './userpost/userpost.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("2292816397695715")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("385146441408-673pvhmbd42scg997fj7ukjal4m5fipn.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JwPaginationComponent,
    BlogComponent,
    SafehtmlPipe,
    MyJsonLd,
    UserpostComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    CKEditorModule,
    ShareButtonsModule.withConfig({
      debug: true
    })
    
   
    
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy},{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
