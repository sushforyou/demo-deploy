import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public model = { yearSelected: NaN, isLaunched: false, isLanded: false};
  constructor(public service: AppService, private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#eaebed';
  }
  public fiteredData(data) {
    this.model = data;
    console.log(this.model.yearSelected);
    console.log(this.model.isLaunched);
    console.log(this.model.isLanded);
  }
}
