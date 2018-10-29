import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

    base = environment.base;
    constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'usuarios');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'usuarios/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'usuarios', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'usuarios/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'usuarios/' + id );
    }
    buscar_tipousuarios(search) {
        return this.http.post(`${environment.base}buscar_tipousuarios`, search);
    }
    lista_tipousuarios() {
        return this.http.get(this.base + 'lista_tipousuarios');
    }
    setUsuario(req) {
      localStorage.removeItem('frado-usuario');
      const usuario = btoa(JSON.stringify(req));
      localStorage.setItem('frado-usuario', usuario);
    }
}
