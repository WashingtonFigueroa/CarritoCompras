import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment.prod';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  environment = environment;
  productos: any = null;
  categoria: any = null;
  ordenar_por: any = 'nombre_asc';
  constructor(private categoriaService: CategoriasService,
              private route: ActivatedRoute) {
    this.route.data.subscribe(data => console.log(data.value));
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

  filtrar() {
    this.categoriaService
        .filtrar_productos_categoria(this.categoria.categoria_id, this.ordenar_por)
        .subscribe((productos: any) => {
          this.productos = productos;
          console.log(this.productos);
        });
  }

}
