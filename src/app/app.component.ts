import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    constructor(private elementRef: ElementRef) { }
       ngAfterViewInit() {
         this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eaebed';
      }
 }
