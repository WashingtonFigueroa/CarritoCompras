import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import { environment } from '../../../environments/environment.prod';
import {PromocionService} from '../../pages/component/promocion/promocion.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  environment = environment;
  categorias: any = [];
  promociones: any = [];
  constructor(private categoriaService: CategoriasService,
              private promocionesService: PromocionService) {
    this.categoriaService.lista_categorias().subscribe(res => {
        this.categorias = res;
      });

      this.promocionesService.lista_promociones().subscribe(res => {
          this.promociones = res;
      });
  }

  ngOnInit() {
  }

}
