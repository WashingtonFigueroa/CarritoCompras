import {Component, OnInit, ViewChild} from '@angular/core';
import {InicioService} from '../inicio.service';
import {Router} from '@angular/router';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import {environment} from '../../../environments/environment.prod';
import {LoginService} from '../../login/login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('overlay') overlay;
  @ViewChild('popup') popup;

  displayCart = false;
  categorias: any = null;
  producto_img_url = environment.base + environment.imagen.producto;

  cartItems = null;
  usuario = null;

    busqueda = {
        categoria_id: 0,
        nombre: ''
    };
  constructor(private inicioService: InicioService,
              private categoriaService: CategoriasService,
              private loginService: LoginService,
              private toastr: ToastrService,
              public router: Router) {
    if (this.loginService.isLoggedIn()) {
      this.usuario = this.loginService.getUsuario();
    }
  }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
    this.inicioService.categorias()
      .subscribe(res => {
        this.categorias = res;
      });
  }

  openCart() {
    if (this.cartItems.subtotal === 0)  {
      this.toastr.error('No tiene productos en carrito', 'Agregue productos');
    } else {
      this.overlay.nativeElement.classList.add('active');
      this.popup.nativeElement.classList.add('active');
    }
  }

  closeCart() {
    this.overlay.nativeElement.classList.remove('active');
    this.popup.nativeElement.classList.remove('active');
  }

  comprar() {
    this.closeCart();
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/cliente/facturacion']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  carrito() {
    this.closeCart();
    if (this.loginService.isLoggedIn()) {
      if (this.loginService.getUsuario().tipo_usuario === 'cliente') {
        this.router.navigate(['/cliente/carrito']);
      }
    } else {
      this.router.navigate(['/inicio/carrito']);
    }
  }

  destroy(producto, index) {
    if (window.confirm('¿Esta seguro de eliminar este producto?')) {
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
    go(categoria_id) {
        console.log(categoria_id);
        this.router.navigate(['/inicio/productos/' + categoria_id]);
    }
}
