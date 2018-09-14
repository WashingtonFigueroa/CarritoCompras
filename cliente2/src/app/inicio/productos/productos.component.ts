import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import {ProductoService} from '../../pages/component/producto/producto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = null;
  categoria: any = null;
  constructor(private categoriaService: CategoriasService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.categoriaService.show(params.categoria_id)
          .subscribe(res => this.categoria = res);
      this.categoriaService.productos_categoria(params.categoria_id)
        .subscribe(res => {
          this.productos = res;
          console.log(this.productos);
        });
    });
  }

  ngOnInit() {
  }

}
