import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '../../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManillasService {
    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'manillas');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'manillas/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'manillas', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'manillas/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'manillas/' + id );
    }
    buscar_manillas(search) {
        return this.http.post(`${environment.base}buscar_manillas`, search);
    }
    lista_manillas() {
        return this.http.get(this.base + 'lista_manillas');
    }
}
