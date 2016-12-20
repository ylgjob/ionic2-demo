import { Component } from '@angular/core';

@Component({
  selector: 'page-alpha-scroll',
  templateUrl: 'alpha-scroll.html'
})
export class AlphaScrollPage {
  breeds: any[] = [];
  currentPageClass = this;
  alphaScrollItemTemplate: string = `
    <ion-item (click)="currentPageClass.onItemClick(item)">
      <h2>{{item.name}}</h2>
      <p>{{item.description}}</p>
    </ion-item>
  `;
  triggerAlphaScrollChange: number = 0;

  constructor() {
    this.assignBreeds();
  }

  onItemClick(item) {
    this.triggerAlphaScrollChange++;
  }

  assignBreeds() {
    var str = "ZABCJKLDEFGOPQRHIMNSWXY";
    for (var i = 0; i < str.length; i++) {
      var nextChar = str.charAt(i);
      for (var j = 0; j < 5; j++) {
        var name = nextChar + 'name' + j;
        this.breeds.push({
          name: name,
          description: 'My name is ' + name
        });
      }
    }
  }
}
