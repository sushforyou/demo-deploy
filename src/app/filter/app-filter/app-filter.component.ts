import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: "app-filter",
  templateUrl: "./app-filter.component.html",
  styleUrls: ["./app-filter.component.scss"]
})
export class AppFilterComponent implements OnInit {
  public yearArr = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020
  ];
  public yearSelected: number;
  public isLaunched: boolean;
  public isLanded: boolean;
  constructor() {}
  // @Output() public yearSelected = new EventEmitter<number>();
  // @Output() public isLaunched = new EventEmitter<boolean>();
  // @Output() public isLanded = new EventEmitter<boolean>();
  @Output() public data = new EventEmitter<{ yearSelected: number, isLaunched: boolean, isLanded: boolean }>();
  public ngOnInit() {}
  public clicked(year) {
    this.yearSelected = year;
    this.send();
  }
  public isLaunchSuccess(isSucces) {
    this.isLaunched = isSucces;
    this.send();
  }
  public isLandingSuccess(isSucces) {
    this.isLanded = isSucces;
    this.send();
  }
  public send() {
    this.data.emit({
      yearSelected: this.yearSelected,
      isLaunched: this.isLaunched,
      isLanded: this.isLanded
    });
  }
}
