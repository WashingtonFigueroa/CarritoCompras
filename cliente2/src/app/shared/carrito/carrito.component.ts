import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {Router} from '@angular/router';
import {InicioService} from '../../inicio/inicio.service';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  cartItems = null;
  producto_img_url = environment.base + environment.imagen.producto;
  constructor(private inicioService: InicioService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
  }

  comprar() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/cliente/facturacion']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  destroy(producto, index) {
    const cartItems = this.cartItems;
    cartItems.items.splice(index, 1);
    let cantidad = 0;
    let subtotal = 0;
    cartItems.items.forEach((cartItem: any) => {
      cantidad += cartItem.cantidad;
      subtotal += cartItem.cantidad * cartItem.precio;
    });
    cartItems.cantidad_total = cantidad;
    cartItems.subtotal = subtotal;
    this.inicioService.changeCartItems(cartItems);
    this.inicioService.currentCartItems
        .subscribe((items: any) => {
          this.cartItems = items;
          console.log(items);
        });
  }
}
