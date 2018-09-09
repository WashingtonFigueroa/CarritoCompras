import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivilegioService {

    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'privilegios');
    }
    update(idtipo, form) {
        return this.http.put(this.base + 'privilegios/' + idtipo, form);
    }
}
