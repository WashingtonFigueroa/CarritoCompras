import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import { environment } from '../../../environments/environment.prod';
import {PromocionService} from '../../pages/component/promocion/promocion.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  environment = environment;
  categorias: any = [];
  promociones: any = [];
    busqueda = {
        categoria_id: 0,
        nombre: ''
    };

  constructor(private categoriaService: CategoriasService,
              private promocionesService: PromocionService,
              public router: Router) {
    this.categoriaService.lista_categorias().subscribe(res => {
        this.categorias = res;
      });

      this.promocionesService.lista_promociones().subscribe(res => {
          this.promociones = res;
      });
  }

  ngOnInit() {
  }
    go(categoria_id) {
        this.router.navigate(['/inicio/productos/' + categoria_id]);
    }

}
