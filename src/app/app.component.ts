import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  upper = '';
  constructor(public service: AppService, private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eaebed';
  }

  uppercase() {
    const str = this.service.getString();
    this.upper = str.toUpperCase();
    }
}
