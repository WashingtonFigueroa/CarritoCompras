import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  environment = environment;
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
