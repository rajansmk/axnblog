import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { Category } from './classall/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  Category =new Array<Category>();
  constructor(private dataService: DataserviceService) { 
  }
  ngOnInit() {
    this.dataService.get_category().subscribe(response =>
      {
        this.Category = response.map(item =>
        {
          

          return new Category(
            item.catid,
              item.name,
              item.categorycount
              

          );
        });
       
      });
      

  
  }

}
