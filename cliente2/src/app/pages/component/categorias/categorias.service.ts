import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'categorias');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'categorias/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'categorias', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'categorias/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'categorias/' + id );
    }
    buscar_categorias(search) {
        return this.http.post(`${environment.base}buscar_categorias`, search);
    }
    lista_categorias() {
        return this.http.get(this.base + 'lista_categorias');
    }
    productos_categoria(categoria_id) {
        return this.http.get(this.base + 'productos_categoria/' + categoria_id );
    }
    filtrar_productos_categoria(categoria_id, ordenar_por) {
      return this.http.get(this.base + 'filtrar_productos_categoria/' + categoria_id + '/' + ordenar_por);
    }
    buscar_productos_categoria(categoria_id, nombre) {
      return this.http.get(this.base + 'buscar_productos_categoria/' + categoria_id + '/' + nombre);
    }
}
