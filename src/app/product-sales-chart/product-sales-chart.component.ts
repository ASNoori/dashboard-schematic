import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-product-sales-chart',
  templateUrl: './product-sales-chart.component.html',
  styleUrls: ['./product-sales-chart.component.css']
})
export class ProductSalesChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
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
       type: 'pie',
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
