import { Injectable } from '@angular/core';
import { environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DescripcionProductoService {

  base  = environment.base;
  constructor(private http: HttpClient) { }

  buscar(request) {
    return this.http.post(`${this.base}buscar_descripcion_productos`, request);
  }

  indexPerPage(url) {
    return this.http.get( url );
  }
  show(id) {
    return this.http.get(`${this.base}descripcion_productos/${id}`);
  }
  store(request) {
    return this.http.post(`${this.base}descripcion_productos`, request);
  }
  update(request, id) {
    return this.http.put(`${this.base}descripcion_productos/${id}`, request);
  }
  destroy(id) {
    return this.http.delete(`${this.base}descripcion_productos/${id}`);
  }

}
