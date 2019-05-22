import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base = environment.base;
  constructor(private http: HttpClient) { }

  login(request) {
    return this.http.post(this.base + 'login', request)
                    .map((data: any) => {
                      let usuario, token;
                      if (data.token) {
                        usuario = btoa(JSON.stringify(data.usuario));
                        token = btoa(JSON.stringify(data.token));
                        localStorage.setItem('frado-usuario', usuario);
                        localStorage.setItem('frado-token', token);
                      }
                      return data;
                    });
  }
  signup(request) {
    return this.http.post(this.base + 'signup', request)
                    .map((data: any) => {
                      let usuario, token;
                      if (data.token) {
                        usuario = btoa(JSON.stringify(data.usuario));
                        token = btoa(JSON.stringify(data.token));
                        localStorage.setItem('frado-usuario', usuario);
                        localStorage.setItem('frado-token', token);
                      }
                      return data;
                    });
  }
  isLoggedIn() {
    if (localStorage.getItem('frado-token')) {
      return true;
    } else {
      return false;
    }
  }
  getUsuario() {
    const usuario = JSON.parse(atob(localStorage.getItem('frado-usuario')));
    return usuario;
  }

  changePassword(req) {
    const usuario_id = this.getUsuario().usuario_id;
    return this.http.post(this.base + 'change-password/' + usuario_id, req);
  }

}
