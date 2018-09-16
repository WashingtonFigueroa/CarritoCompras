import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../pages/component/producto/producto.service';
import {environment} from '../../../environments/environment.prod';

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
  constructor(private route: ActivatedRoute,
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
}
