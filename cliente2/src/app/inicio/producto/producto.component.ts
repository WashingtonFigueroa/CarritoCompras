import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../pages/component/producto/producto.service';
import {environment} from '../../../environments/environment.prod';
import {ToastrService} from 'ngx-toastr';
import {InicioService} from '../inicio.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  environment = environment;
  settings: any = {
    image: '',
    image_id: 0
  };
  producto: any = null;
  selectedInventario: any = null;
  stock: any = [];
  cantidad = null;
  cantidad_total = 0;
  subtotal = 0;
  cartItems = [];
  constructor(private route: ActivatedRoute,
              private toast: ToastrService,
              private inicioService: InicioService,
              private productoService: ProductoService) {

    this.route.params
        .subscribe((param: any) => {
            this.productoService.show(param.producto_id)
                .subscribe((producto: any) => {
                    this.producto = producto;
                    this.settings.image =  this.environment.base + this.environment.imagen.producto + producto.producto_id;
                });
        });
  }

  ngOnInit() {
    this.inicioService.currentCartItems
        .subscribe((cartItems: any) => {
          this.cartItems = cartItems.items;
        });
  }

  generateStock(inventario: any) {
    this.selectedInventario = inventario;
    this.stock = [];
    for ( let i = 1; i <= inventario.stock; i++) {
      this.stock.push({ value: i });
    }
  }
  selectImage(imagen_id) {
    this.settings.image_id = imagen_id;
    this.settings.image = this.environment.base + this.environment.imagen.articulo + imagen_id;
  }

  addCart() {
    const item = {
      'inventario_id' : this.selectedInventario.inventario_id,
      'producto_id' : this.selectedInventario.producto_id,
      'talla' : this.selectedInventario.talla,
      'precio': this.selectedInventario.precio,
      'puntos' : this.selectedInventario.puntos,
      'cantidad' : parseInt(this.cantidad, 10),
      'producto' : this.producto
    };
    let registrado = false;
    for ( let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].inventario_id === item.inventario_id) {
        registrado = true;
      }
    }

    if ( !registrado ) {
      this.cantidad_total = 0;
      this.subtotal = 0;
      this.toast.success(item.cantidad + ' ' + item.producto.nombre + '(s) registrado/a con talla ' + item.talla, 'Agregado a carrito');
      this.cartItems.push(item);
      this.cartItems.forEach((cartItem: any) => {
        this.cantidad_total += cartItem.cantidad;
        this.subtotal += cartItem.cantidad * cartItem.precio;
      });
    } else {
      this.toast.error('Este producto del inventario ya fue seleccionado', 'Elija otro producto');
    }
    this.inicioService.changeCartItems({
      'cantidad_total' : this.cantidad_total,
      'subtotal' : this.subtotal,
      'items' : this.cartItems
    });
    console.log(this.cartItems);
  }
}
