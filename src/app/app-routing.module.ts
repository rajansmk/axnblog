import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import{BlogComponent} from './blog/blog.component'
import { UserpostComponent } from './userpost/userpost.component';
import { MainsidebarComponent } from './mainsidebar/mainsidebar.component';
import { TutorialsidebarComponent } from './tutorialsidebar/tutorialsidebar.component';

const routes: Routes = [
  {path:'userpost',component:UserpostComponent},
  {path:'',component:HomeComponent,
  children: [
    {
    path:  '',
    component:  MainsidebarComponent
    }
    ]
},
  
  {path:'**',component:BlogComponent,
  children: [
    {
    path:  '',
    component:  TutorialsidebarComponent
    }
    ]
},
  
  
 
  //,
  // {path:'blog/:category/:blogid/:header',component:BlogComponent}
  //{path:'blog/:seourl',component:BlogComponent}
  // {path: 'about',component:AboutComponent},
  // {path: 'contactus',component:ContactusComponent},
  // {path: 'services',component:ServicesComponent},
  // {path: 'home',component:HomeComponent},
  // {path: 'services/support',component:SupportComponent},
  // {path: 'services/customercare',component:CustomercareComponent},
  // {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
