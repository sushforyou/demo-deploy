import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public model = { yearSelected: 0, isLaunched: false, isLanded: false };
  readonly ROOT_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  public posts: any;
  constructor(
    public service: AppService,
    private http: HttpClient,
    private elementRef: ElementRef
  ) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#eaebed';
  }
  public fiteredData(data) {
    this.model = data;
    console.log(this.model.yearSelected);
    console.log(this.model.isLaunched);
    console.log(this.model.isLanded);
    const launch = this.model.isLaunched;
    this.launchData(launch);
  }
  public getData() {
    this.service.getDefaultData().subscribe((data: any) => {
      this.posts = data;
    });
  }
  public launchData(l) {
    const launch = l;
    this.service.launchData(launch).subscribe((data: any) => {
      this.posts = data;
    });
  }
  public landData() {
    this.service.landData().subscribe((data: any) => {
      this.posts = data;
    });
  }
  public allData() {
    this.service.allData().subscribe((data: any) => {
      this.posts = data;
    });
  }
}
