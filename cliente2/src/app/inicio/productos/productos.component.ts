import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../pages/component/categorias/categorias.service';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment.prod';
import {ClienteListaDeseosService} from '../../cliente/cliente-lista-deseos/cliente-lista-deseos.service';
import {LoginService} from '../../login/login.service';
import {ToastrService} from 'ngx-toastr';

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
              private listaService: ClienteListaDeseosService,
              private toastr: ToastrService,
              private loginService: LoginService,
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

  addWishList(producto_id) {
    if (this.loginService.isLoggedIn()) {
      const req = {
        'producto_id' : producto_id,
        'usuario_id' : this.loginService.getUsuario().usuario_id
      };
      this.listaService.store(req)
        .subscribe((res: any) => {
          if (res.estado === 'exito') {
            this.toastr.success('Agregado a su lista de deseos', 'Exito');
          } else {
            this.toastr.error('El producto ya fue agregado a la lista de deseos', 'Producto Duplicado');
          }
        });
    } else {
      this.toastr.error('Ingrese a su cuenta', 'No se agrego a su lista');
    }
  }
}
