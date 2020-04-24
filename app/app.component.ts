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
        type: 'xrange',
        backgroundColor: 'transparent',
        inverted: false,
        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        ignoreHiddenSeries: false,
        resetZoomButton: {
            position: {
            align: 'right',
            verticalAlign: 'top',
            x: -25,
            y: -105
          },
          theme: {
            fill: 'none',
            stroke: 'none',
            style: {
              color: '#0274b5',
              fontSize: '14px',
              fontWeight: 'light'
            },
            states: {
              hover: {
                fill: 'none',
              }
            }
          }
        }
      },
      
      title: {
        text: 'Highcharts X-range'
      },
      xAxis: {
        type: 'datetime',
        lineWidth: 2,
        lineColor: '#2a2a2a',
        title: {
          text: null
        },
        crosshair: {
          className: 'ng-hide',
          width: 0
        },
        dateTimeLabelFormats: {
          second: '%d-%b-%Y<br/>%H:%M:%S',
          minute: '%d-%b-%Y<br/>%H:%M',
          hour: '%d-%b-%Y<br/>%H:%M',
          day: '%d-%b-%Y',
          week: '%d-%b-%Y',
          month: '%b-%Y',
          year: '%Y'
        },
        gridLineWidth: 0,
        tickColor: '#424242',
        tickLength: 25,
        tickWidth: 2,
        opposite: true,
        minRange: 24 * 3600 * 1000,
        min:  Date.UTC(2014, 10, 21),
        max:  Date.UTC(2014, 12, 21),
        labels: {
          y: -40,
          align: 'center',
          style: {
            color: '#828282'
          }
        },
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