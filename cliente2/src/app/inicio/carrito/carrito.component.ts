import { Component, OnInit } from '@angular/core';
import {InicioService} from '../inicio.service';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartItems = null;
  producto_img_url = environment.base + environment.imagen.producto;
  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
  }

}
