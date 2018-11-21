import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {ClienteListaDeseosService} from './cliente-lista-deseos.service';
import {LoginService} from '../../login/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-lista-deseos',
  templateUrl: './cliente-lista-deseos.component.html',
  styleUrls: ['./cliente-lista-deseos.component.css']
})
export class ClienteListaDeseosComponent implements OnInit {

  lista_deseos: any = null;
  usuario: any = null;
  base = environment.base;
  constructor(private listaService: ClienteListaDeseosService,
              private toastr: ToastrService,
              private loginService: LoginService) {
    this.usuario = this.loginService.getUsuario();
    this.listaService.listaDeseos(this.usuario.usuario_id)
      .subscribe((res: any) => {
        this.lista_deseos = res;
      });
  }

  ngOnInit() {
  }

  destroy(lista_deseo_id, index) {
    if (window.confirm('¿Esta seguro de eliminarlo de su lista de deseos?')) {
      this.listaService.destroy(lista_deseo_id)
        .subscribe((res: any) => {
          this.lista_deseos.splice(index, 1);
          this.toastr.success(res.mensaje, 'Exito');
        });
    }
  }
}
