
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-my-json-ld',
  template: '<div [innerHTML]="html"></div>',
  styles: []
})
export class MyJsonLd implements OnInit {
  @Input() itemLD: {[key: string]: any};
  html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.html = this.getSafeHTML(this.itemLD);
  }

  getSafeHTML(jsonLD: {[key: string]: any}): SafeHtml {
    const json = jsonLD ? JSON.stringify(jsonLD, null, 2).replace(/<\/script>/g, '<\\/script>') : ''; // escape / to prevent script tag in JSON
    const html = `<script type="application/ld+json">${json}</script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
