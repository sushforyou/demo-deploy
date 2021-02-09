import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: "app-filter",
  templateUrl: "./app-filter.component.html",
  styleUrls: ["./app-filter.component.scss"]
})
export class AppFilterComponent implements OnInit {
  // public yearArr = [
  //   2006,
  //   2007,
  //   2008,
  //   2009,
  //   2010,
  //   2011,
  //   2012,
  //   2013,
  //   2014,
  //   2015,
  //   2016,
  //   2017,
  //   2018,
  //   2019,
  //   2020
  // ];
  public btnArray = [
    { clicked: false, year: 2006 },
    { clicked: false, year: 2007 },
    { clicked: false, year: 2008 },
    { clicked: false, year: 2009 },
    { clicked: false, year: 2010 },
    { clicked: false, year: 2011 },
    { clicked: false, year: 2012 },
    { clicked: false, year: 2013 },
    { clicked: false, year: 2014 },
    { clicked: false, year: 2015 },
    { clicked: false, year: 2016 },
    { clicked: false, year: 2017 },
    { clicked: false, year: 2018 },
    { clicked: false, year: 2019 },
    { clicked: false, year: 2020 },

  ];
  public lauchBtns = [
    { clicked: false, value: true, displayName: "True" },
    { clicked: false, value: false, displayName: "False" }
  ];
  public landBtns = [
    { clicked: false, value: true, displayName: "True" },
    { clicked: false, value: false, displayName: "False" }
  ];
  public yearSelected: number;
  public isLaunched: boolean;
  public isLanded: boolean;
  public yearClicked = false;
  // public btn = {clicked: false, year: 2006};
  // public lanchClicked = false;
  // public landClicked = false;
  constructor() {}
  // @Output() public yearSelected = new EventEmitter<number>();
  // @Output() public isLaunched = new EventEmitter<boolean>();
  // @Output() public isLanded = new EventEmitter<boolean>();
  @Output() public data = new EventEmitter<{
    yearSelected: number;
    isLaunched: boolean;
    isLanded: boolean;
  }>();
  public ngOnInit() {}
  public clicked(obj) {
    for (const btn of this.btnArray) {
      btn.clicked = false;
    }
    obj.clicked = true;
    this.yearSelected = obj.year;
    this.send();
  }
  public isLaunchSuccess(obj) {
    // this.lanchClicked = true;
    for (const btn of this.lauchBtns) {
      btn.clicked = false;
    }
    obj.clicked = true;
    const isSucces = obj.value;
    this.isLaunched = isSucces;
    this.send();
  }
  public isLandingSuccess(obj) {
    // this.landClicked = true;
    for (const btn of this.landBtns) {
      btn.clicked = false;
    }
    obj.clicked = true;
    const isSucces = obj.value;
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
