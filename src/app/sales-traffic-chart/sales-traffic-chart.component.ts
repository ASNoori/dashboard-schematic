import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.css']
})
export class SalesTrafficChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
      // height: 325
    },
   title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
       type: 'bar',
       data: [         {
           name: 'Electronics',
           y: 41.0,
           color: '#044342',
         },
         {
           name: 'Groceries',
           y: 33.8,
           color: '#7e0505',
         },
         {
           name: 'Cosmetics',
           y: 6.5,
           color: '#ed9e20',
         },
         {
           name: 'Clothes',
           y: 15.2,
           color: '#6920fb',
         },
         {
           name: 'Appliances',
           y: 3.5,
           color: '#121212',
         },
       ]
      }
     ],
     credits: {
       enabled: false
     }
   };
}
