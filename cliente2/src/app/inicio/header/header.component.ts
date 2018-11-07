import {Component, OnInit, ViewChild} from '@angular/core';
import {InicioService} from '../inicio.service';
import {Router} from '@angular/router';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import {environment} from '../../../environments/environment.prod';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayCart = false;
  categorias: any = null;
  busqueda = {
    categoria_id: 0,
    nombre: ''
  };
  producto_img_url = environment.base + environment.imagen.producto;

  cartItems = null;
  usuario = null;
  constructor(private inicioService: InicioService,
              private categoriaService: CategoriasService,
              private loginService: LoginService,
              public router: Router) {
    if (this.loginService.isLoggedIn()) {
      this.usuario = this.loginService.getUsuario();
    }
  }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
        console.log('Cart Items of Header');
        console.log(this.cartItems);
      });
    this.inicioService.categorias()
      .subscribe(res => {
        console.log(res);
        this.categorias = res;
      });
  }

  dropDownCart() {
    this.displayCart = !this.displayCart;
  }

  comprar() {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/cliente/facturacion']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  buscar_productos() {
/*    this.categoriaService
        .buscar_productos_categoria(this.busqueda.categoria_id, this.busqueda.nombre)
        .subscribe((productos: any) => {
          this.productos = productos;
          console.log(this.productos);
        });*/
  }


}
