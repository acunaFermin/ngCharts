import { Component } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
@Component({
  selector: 'app-barra-doble',
  templateUrl: './barra-doble.component.html',
  styles: [],
})
export class BarraDobleComponent {
  horizontalBar: ChartType = 'horizontalBar';
  verticalBar: ChartType = 'bar';

  proveedoresData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Juan' },
    { data: [50, 250, 30, 450, 200], label: 'Harry' },
  ];

  proveedoresLabel: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productoData: ChartDataSets[] = [
    {
      data: [200, 300, 400, 200, 100],
      label: 'Autos',
      backgroundColor: 'blue',
    },
  ];
}
