import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  public model = { yearSelected: 0, isLaunched: false, isLanded: false };
  readonly ROOT_URL = "https://api.spaceXdata.com/v3/launches?limit=100";
  public posts: any;
  public imgUrl = "";
  public missionName = "";
  public flightNumber = "";
  public missionIds = [];
  public launchYear;
  public launchSuccess;
  public landSuccess;
  public nodata = false;
  constructor(
    public service: AppService,
    private http: HttpClient,
    private elementRef: ElementRef
  ) {
    this.getData();
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      "#f2f2f2";
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
      this.missionIds = this.posts.mission_id;
      console.log(this.posts);
      const name = this.posts[13].rocket.first_stage.cores[0].land_success;
      console.log(name);
    });
  }
  // Launch Success Filter:
  public launchData(lanuchValue) {
    const launch = lanuchValue;
    this.nodata = false;
    this.service.launchData(launch).subscribe(
      (data: any) => {
        this.posts = data;
        const len = this.posts.length;
        if (len === 0) {
          this.nodata = true;
        }
      },
      err => console.log(err)
    );
  }
  // Launch & Land Filter:
  public landData(lanuchValue, landValue) {
    const launch = lanuchValue;
    const land = landValue;
    this.nodata = false;
    this.service.landData(launch, land).subscribe((data: any) => {
      this.posts = data;
      const len = this.posts.length;
      if (len === 0) {
        this.nodata = true;
      }
    });
  }
  // All data with year, lauch and land filter
  public allData(lanuchValue, landValue, yearValue) {
    const launch = lanuchValue;
    const land = landValue;
    const year = yearValue;
    this.nodata = false;
    this.service.allData(launch, land, year).subscribe((data: any) => {
      this.posts = data;
      const len = this.posts.length;
      if (len === 0) {
        this.nodata = true;
      }
    });
  }
}
