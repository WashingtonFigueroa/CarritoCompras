import { Component, OnInit } from '@angular/core';
import {InicioService} from '../../inicio/inicio.service';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-cliente-facturacion',
  templateUrl: './cliente-facturacion.component.html',
  styleUrls: ['./cliente-facturacion.component.css']
})
export class ClienteFacturacionComponent implements OnInit {
  cartItems = null;
  producto_img_url = environment.base + environment.imagen.producto;
  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
  }

  procesar() {

  }


}
