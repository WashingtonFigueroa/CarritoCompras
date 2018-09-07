import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
    base = environment.base;

    constructor(protected http: HttpClient) {
    }

    index() {
        return this.http.get(this.base + 'categorias');
    }

    indexPerPage(url) {
        return this.http.get(url);
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
        return this.http.delete(this.base + 'categorias/' + id);
    }

    buscar_categorias(search) {
        return this.http.post(`${environment.base}buscar_categorias`, search);
    }
}