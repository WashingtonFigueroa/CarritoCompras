import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'inventarios');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'inventarios/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'inventarios', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'inventarios/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'inventarios/' + id );
    }
    buscar_inventarios(search) {
        return this.http.post(`${environment.base}buscar_inventarios`, search);
    }
    lista_inventarios() {
        return this.http.get(this.base + 'lista_inventarios');
    }
    // listar_descripcion_productos(producto_id) {
    //     return this.http.get(`${this.base}listar_descripcion_productos/${producto_id}`);
    // }
}
