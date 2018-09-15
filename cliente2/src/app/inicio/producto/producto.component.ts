import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductoService} from '../../pages/component/producto/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  settings: any = {
    zoom: 3,
    enableScrollZoom: true
  };
  producto: any = null;
  stock: any = [];

  constructor(private route: ActivatedRoute,
              private productoService: ProductoService) {
    this.route.params
        .subscribe((param: any) => {
            this.productoService.show(param.producto_id)
                .subscribe((producto: any) => {
                    this.producto = producto;
                    for ( let i = 1; i <= producto.stock; i++) {
                      this.stock.push({ value: i });
                    }
                });
        });
  }

  ngOnInit() {
  }

}
