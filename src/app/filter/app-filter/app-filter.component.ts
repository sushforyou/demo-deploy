import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnInit {
   public yearArr = [ 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
                      2014, 2015, 2016, 2017, 2018, 2019, 2020];
  constructor() { }
  ngOnInit() {
  }

}
