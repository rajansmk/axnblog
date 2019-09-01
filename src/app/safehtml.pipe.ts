import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safehtml'

})
export class SafehtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { 
    
  }
  public transform(url: string): any {
    return this.sanitized.bypassSecurityTrustHtml(url);
  }

}
