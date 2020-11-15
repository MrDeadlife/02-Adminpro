import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Colors } from 'ng2-charts';
@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [],
})
export class DonutsComponent implements OnInit {
  @Input() titulo: string = 'sin titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2','Label3',
  ];
  @Input('data')doughnutChartData: MultiDataSet = [
    [350, 450, 100], // primero
    // [359, 455, 150], // segundo
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Colors[] = [
    { backgroundColor: ['#9E120E', '#FF5800', '#4377F9'] }, // Primero
    {}, // Segundo
  ];
  constructor() {}

  ngOnInit(): void {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
