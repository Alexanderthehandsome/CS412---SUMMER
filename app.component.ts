import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ConfigService],
})
export class AppComponent {
  cityName: string = 'aa';
  dataList: Array<any> = [];

  title = 'client';

  constructor(private server: ConfigService) {}

  async addItem(q) {
    var res: any = await this.server.getData({ q }).toPromise();
    if (res.cod == 404) {
      alert(res.message);
    } else {
      this.dataList = res.list;
    }
  }
}
