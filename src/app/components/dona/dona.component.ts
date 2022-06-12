import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() title: string = "Sin titulo";
  @Input("labels") Labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input("dataset") Data1 :number[] = [10,30,10];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.Labels1,
    datasets: [
              { data: this.Data1 }
        ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor() {
  }

  ngOnInit(): void {

    this.doughnutChartData = {
      labels: this.Labels1,
      datasets: [
            { data: this.Data1 }
          ]
    };
  }

}
