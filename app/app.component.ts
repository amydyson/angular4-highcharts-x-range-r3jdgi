import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import xrange from "highcharts/modules/xrange";

xrange(Highcharts);
Exporting(Highcharts);

import { Http, Response, Headers, RequestOptions, Jsonp, JsonpModule } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  name = `Amy`;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  constructor() {
  }

  ngOnInit() {
    Highcharts.chart(this.container.nativeElement, {

      chart: {
        type: 'xrange'
      },
      title: {
        text: 'Highcharts X-range'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: ''
        },
        categories: ['Prototyping', 'Development', 'Testing'],
        reversed: true
      },
      series: [{
        name: 'Project 1',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        pointWidth: 20,
        data: [{
          x: Date.UTC(2014, 10, 21),
          x2: Date.UTC(2014, 11, 2),
          y: 0,
          partialFill: 0.25
        }, {
          x: Date.UTC(2014, 11, 2),
          x2: Date.UTC(2014, 11, 5),
          y: 1
        }, {
          x: Date.UTC(2014, 11, 8),
          x2: Date.UTC(2014, 11, 9),
          y: 2
        }, {
          x: Date.UTC(2014, 11, 9),
          x2: Date.UTC(2014, 11, 19),
          y: 1
        }, {
          x: Date.UTC(2014, 11, 10),
          x2: Date.UTC(2014, 11, 23),
          y: 2
        }],
        dataLabels: {
          enabled: true
        }
      }]

    });


  }

}