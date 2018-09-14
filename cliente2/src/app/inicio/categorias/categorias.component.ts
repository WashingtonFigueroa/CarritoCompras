import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: any = [];
  constructor(private categoriaService: CategoriasService) {
    this.categoriaService.lista_categorias()
      .subscribe(res => {
        this.categorias = res;
      });
  }

  ngOnInit() {
  }

}
