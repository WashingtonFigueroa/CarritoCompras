import { Component, OnInit } from '@angular/core';
import {ComprasService} from '../../pages/component/compras/compras.service';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-cliente-compras',
  templateUrl: './cliente-compras.component.html',
  styleUrls: ['./cliente-compras.component.css']
})
export class ClienteComprasComponent implements OnInit {

  usuario: any = null;
  compras: any = null;
  constructor(private compraService: ComprasService,
              private loginService: LoginService) {
    this.usuario = this.loginService.getUsuario();
    this.compraService.misCompras(this.usuario)
        .subscribe(res => this.compras = res);
  }

  ngOnInit() {
  }

}
