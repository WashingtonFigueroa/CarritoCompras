import {Component, OnInit, ViewChild} from '@angular/core';
import {InicioService} from '../inicio.service';
import {Router} from '@angular/router';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayCart = false;
  categorias: any = null;
  productos = [];
  subtotal = 0;
  busqueda = {
    categoria_id: 0,
    nombre: ''
  };
  constructor(private inicioService: InicioService,
              private categoriaService: CategoriasService,
              public router: Router) {
    const cantidad = Math.random() * 10 + 1;
    for ( let i = 0; i < cantidad; i++) {
     this.productos.push({
       'imagen': '../../../assets/inicio/img/product01.png',
       'nombre': 'Camisa ' + (i + 1),
       'precio': Math.round(Math.random() * 1000 + 1),
       'cantidad': Math.round(Math.random() * 5 + 1),
     });
    }
  }

  ngOnInit() {
    this.inicioService.categorias()
      .subscribe(res => {
        console.log(res);
        this.categorias = res;
      });
  }

  dropDownCart() {
    this.displayCart = !this.displayCart;
    this.subtotal = 0;
    if (this.displayCart) {
      this.productos.forEach((producto: any) => {
        this.subtotal += producto.precio * producto.cantidad;
      });
    }
  }

  buscar_productos() {
    this.categoriaService
        .buscar_productos_categoria(this.busqueda.categoria_id, this.busqueda.nombre)
        .subscribe((productos: any) => {
          this.productos = productos;
          console.log(this.productos);
        });
  }


}
