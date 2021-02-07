import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  readonly ROOT_URL = 'https://api.spaceXdata.com/v3/launches?limit=100';
  public posts: any;
  constructor(private http: HttpClient) {}

  public getString() {
    const str = 'dummy  string';
    return str;
  }
  public getDefaultData() {
    return this.http.get(this.ROOT_URL);
  }
  public launchData(launch) {
    return this.http.get(this.ROOT_URL + 'launch_success=' + launch);
  }
  public landData() {
    return this.http.get(this.ROOT_URL);
  }
  public allData() {
    return this.http.get(this.ROOT_URL);
  }
}
