import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { observable } from 'rxjs';
import { GraficasService } from '../../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficasServices: GraficasService) {}

  ngOnInit(): void {
    this.graficasServices.getUsuarioRedesData().subscribe((data) => {
      const { itemLabels, itemValues } = data;
      this.doughnutChartLabels = itemLabels;
      this.doughnutChartData = itemValues;
    });
  }

  public doughnutChartLabels: Label[] = [];

  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
}
