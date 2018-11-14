import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  base = environment.base;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get( this.base + 'compras');
  }
  misCompras(usuario_id) {
    return this.http.get( this.base + 'mis-compras/' + usuario_id);
  }
  store(req) {
    return this.http.post(this.base + 'compras', req);
  }
  uploadComprobante(compra_id, req) {
    return this.http.post(this.base + 'upload-comprobante/' + compra_id, req);
  }
}
