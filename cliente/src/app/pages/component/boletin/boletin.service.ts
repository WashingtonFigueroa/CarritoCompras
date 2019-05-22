import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoletinService {

  base = environment.base;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(this.base + 'boletines');
  }
  store(req) {
    return this.http.post(this.base + 'boletines', req);
  }
  enviarBoletines(req) {
    return this.http.post(this.base + 'enviar_boletines', req);
  }
  destroy(boletin_id) {
    return this.http.delete(this.base + 'boletines/' + boletin_id);
  }
}
