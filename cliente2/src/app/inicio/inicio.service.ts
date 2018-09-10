import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  base = environment.base
  constructor(private http: HttpClient) { }

  categorias() {
    return this.http.get(`${this.base}lista_categorias`);
  }
}
