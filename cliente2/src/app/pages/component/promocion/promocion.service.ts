import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromocionService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'promociones');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'promociones/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'promociones', request);
    }
    update(request, id) {
        return this.http.post(this.base + 'modificar_promociones/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'promociones/' + id );
    }
    buscar_promociones(search) {
        return this.http.post(`${environment.base}buscar_promociones`, search);
    }
    lista_promociones() {
        return this.http.get(this.base + 'lista_promociones');
    }
    // listar_descripcion_productos(producto_id) {
    //     return this.http.get(`${this.base}listar_descripcion_productos/${producto_id}`);
    // }
}
