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
  public imgUrl = '';
  public missionName = '';
  public flightNumber = '';
  public missionId = [];
  public launchYear ;
  public launchSuccess;
  public landSuccess;
  constructor(
    public service: AppService,
    private http: HttpClient,
    private elementRef: ElementRef
  ) {
    this.getData();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
     '#eaebed';
  }
  public fiteredData(data) {
    this.model = data;
    const islaunch = this.model.isLaunched;
    const island = this.model.isLanded;
    const year = this.model.yearSelected;
    if (islaunch && island !== undefined && year) {
      this.allData(islaunch, island, year);
    } else if (islaunch && island !== undefined) {
      this.landData(islaunch, island);
    } else if (islaunch !== undefined) {
      this.launchData(islaunch);
    }
  }
  // API end point for the first-time page load without any Filters:
  public getData() {
    this.service.getDefaultData().subscribe((data: any) => {
      this.posts = data;
    });
  }
  // Launch Success Filter:
  public launchData(lanuchValue) {
    const launch = lanuchValue;
    this.service.launchData(launch).subscribe(
      (data: any) => {
        this.posts = data;
      },
      err => console.log(err)
    );
  }
  // Launch & Land Filter:
  public landData(lanuchValue, landValue) {
    const launch = lanuchValue;
    const land = landValue;
    this.service.landData(launch, land).subscribe((data: any) => {
      this.posts = data;
    });
  }
  // All data with year, lauch and land filter
  public allData(lanuchValue, landValue, yearValue) {
    const launch = lanuchValue;
    const land = landValue;
    const year = yearValue;
    this.service.allData(launch, land, year).subscribe((data: any) => {
      this.posts = data;
    });
  }
}
