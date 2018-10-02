import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CamisaService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'camisas');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'camisas/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'camisas', request);
    }
    update(request, id) {
        return this.http.post(this.base + 'modificar_camisas/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'camisas/' + id );
    }
    buscar_camisas(search) {
        return this.http.post(`${environment.base}buscar_camisas`, search);
    }
    lista_camisas() {
        return this.http.get(this.base + 'lista_camisas');
    }
    tipo_camisas(tipo) {
        return this.http.get(this.base + 'tipo_camisas/' + tipo);
    }
}
