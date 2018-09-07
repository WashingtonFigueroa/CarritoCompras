import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
    base = environment.base;

    constructor(protected http: HttpClient) {
    }

    index() {
        return this.http.get(this.base + 'productos');
    }

    indexPerPage(url) {
        return this.http.get(url);
    }

    show(id) {
        return this.http.get(this.base + 'productos/' + id);
    }

    store(request) {
        return this.http.post(this.base + 'productos', request);
    }

    update(request, id) {
        return this.http.put(this.base + 'productos/' + id, request);
    }

    destroy(id) {
        return this.http.delete(this.base + 'productos/' + id);
    }

    buscar_productos(search) {
        return this.http.post(`${environment.base}buscar_productos`, search);
    }
}