import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'articulos');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'articulos/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'articulos', request);
    }
    update(request, id) {
        return this.http.post(this.base + 'modificar_articulos/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'articulos/' + id );
    }
    buscar_articulos(search) {
        return this.http.post(`${environment.base}buscar_articulos`, search);
    }
    lista_articulos() {
        return this.http.get(this.base + 'lista_articulos');
    }
}
