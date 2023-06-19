import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartService } from 'services/chart.service';
@Component({
  selector: 'app-annual-sale-chart',
  templateUrl: './annual-sale-chart.component.html',
  styleUrls: ['./annual-sale-chart.component.css']
})
export class AnnualSaleChartComponent {
  constructor(private chartservice: ChartService){}
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      // height: 325
    },
    title: {
      text: 'Month wise sales',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in $',
      },
    },
    series: [
      {
        name: 'Arizona',
        type: 'line',
        color: '#044342',
        // data: [1, 2, 3],
        data:this.chartservice.getData()
      },
      {
        name: 'Connecticut',
        type: 'line',
        color: '#7e0505',
        // data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159],
        data:this.chartservice.getData1()

      },
      {
        name: 'Ohio',
        type: 'line',
        color: '#ed9e20',
        // data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59],
        data:this.chartservice.getData2()

      },
    ],
    credits: {
      enabled: false,
    },
  };

}
