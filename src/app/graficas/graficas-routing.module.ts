import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './components/pages/barra/barra.component';
import { BarraDobleComponent } from './components/pages/barra-doble/barra-doble.component';
import { DonaComponent } from './components/pages/dona/dona.component';
import { DonaHttpComponent } from './components/pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarraComponent },
      { path: 'barra-doble', component: BarraDobleComponent },
      { path: 'dona', component: DonaComponent },
      { path: 'dona-http', component: DonaHttpComponent },
      { path: '**', redirectTo: 'barra' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraficasRoutingModule {}
