import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly ROOT_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  public posts: any;
  constructor(private http: HttpClient) {}
  // Service for default page load
  public getDefaultData() {
    return this.http.get(this.ROOT_URL);
  }
  // Launch success filter
  public launchData(launch) {
    let param = new HttpParams();
    param = param.set('launch_success', launch);
    return this.http.get(this.ROOT_URL + '&launch_success=' + launch);
  }
  // Launch and land filter
  public landData(launchValue, landValue) {
    let param = new HttpParams();
    param = param.set('launch_success', launchValue);
    param = param.set('land_success', landValue);
    return this.http.get(
      this.ROOT_URL +
        '&launch_success=' +
        launchValue +
        '&land_success=' +
        landValue
    );
  }
  // Fiter for all
  public allData(launchValue, landValue, yearValue) {
    let param = new HttpParams();
    param = param.set('launch_success', launchValue);
    param = param.set('land_success', landValue);
    param = param.set('launch_year', yearValue);
    return this.http.get(
      this.ROOT_URL +
        '&launch_success=' +
      launchValue +
        '&land_success=' +
        landValue +
        '&launch_year=' +
      yearValue
    );
  }
}
