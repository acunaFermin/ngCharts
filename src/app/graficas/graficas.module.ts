import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarraComponent } from './components/pages/barra/barra.component';
import { BarraDobleComponent } from './components/pages/barra-doble/barra-doble.component';
import { DonaComponent } from './components/pages/dona/dona.component';
import { DonaHttpComponent } from './components/pages/dona-http/dona-http.component';

@NgModule({
  declarations: [
    BarraComponent,
    BarraDobleComponent,
    DonaComponent,
    DonaHttpComponent,
  ],
  imports: [CommonModule, GraficasRoutingModule, ChartsModule],
})
export class GraficasModule {}
