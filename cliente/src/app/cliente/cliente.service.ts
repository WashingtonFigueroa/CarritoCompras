import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  base  = environment.base;
  constructor(private http: HttpClient) { }

  facturar(req) {
    return this.http.post(this.base + 'compras', req);
  }
}
