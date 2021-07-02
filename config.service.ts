import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var baseUrl = '/api';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  getData(data: any) {
    return this.http.post(baseUrl + '/ps4/searchWeatherTwo', data);
  }
}
