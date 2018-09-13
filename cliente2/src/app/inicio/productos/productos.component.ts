import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  categorias: any = null;
  constructor(private categoriaService: CategoriasService) {
    this.categoriaService.lista_categorias()
        .subscribe(res => this.categorias = res);
  }

  ngOnInit() {
  }

}
