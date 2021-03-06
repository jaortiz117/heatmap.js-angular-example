import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as h337 from 'heatmap.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('map') map: ElementRef;

  ngAfterViewInit(){
    // minimal heatmap instance configuration
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: this.map.nativeElement
    });

    // now generate some random data
    var points = [];
    var max = 100;
    var width = 840;
    var height = 1000;
    var len = 500;

    while (len--) {
      var val = Math.floor(Math.random()*100);
      max = Math.max(max, val);
      var point = {
        x: Math.floor(Math.random()*width),
        y: Math.floor(Math.random()*height),
        value: val
      };
      points.push(point);
    }
    // heatmap data format
    var data = {
      max: max,
      min: 10,
      data: points
    };
    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);
  }
}
