import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteListaDeseosService {

  base = environment.base;
  constructor(private http: HttpClient) {}

  store(req) {
    return this.http.post(this.base + 'lista-deseos', req);
  }

  listaDeseos(usuario_id) {
    return this.http.get(this.base + 'lista-deseos/' + usuario_id);
  }

  destroy(lista_deseo_id) {
    return this.http.delete(this.base + 'lista-deseos/' + lista_deseo_id);
  }
}
