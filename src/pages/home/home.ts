import { Component } from '@angular/core';

import { OpenUrlModalController } from '../../components/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private openUrlCtrl: OpenUrlModalController) {
  }

  openExternalUrl() {
    this.openUrlCtrl.open({
      title: '百度',
      url: 'http://www.baidu.com'
    });
  }
}
