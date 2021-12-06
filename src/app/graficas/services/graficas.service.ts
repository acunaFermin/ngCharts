import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/Common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private httpClient: HttpClient) {}

  getUsuariosRedes() {
    return this.httpClient.get('http://194.195.214.149:4500/');
  }

  getUsuarioRedesData() {
    return this.getUsuariosRedes().pipe(
      map((data) => {
        const itemLabels = Object.keys(data);
        const itemValues = Object.values(data);

        return { itemLabels, itemValues };
      })
    );
  }
}
