import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../producto.service";
import {CategoriasService} from "../../categorias/categorias.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
    categorias: any = null;
    producto_id: number = null;
    producto: any = null;
    productoGroup: FormGroup;

    constructor(protected productoService: ProductoService,
                protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
               // protected toastr: ToastrService
    ) {
        this.categoriaService.lista_categorias().subscribe(res => this.categorias = res);
        this.route.params.subscribe(param => {
            this.producto_id = param.id;
            this.productoService.show(param.id).subscribe(res => {
                    this.producto = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(producto) {
        this.productoGroup = this.fb.group({
            'categoria_id' : new FormControl(producto.categoria_id, [Validators.required]),
            'stock': new FormControl(producto.stock),
            'material' : new FormControl(producto.material),
            'color1': new FormControl(producto.color1),
            'color2': new FormControl(producto.color2),
            'talla': new FormControl(producto.talla),
            'puntos': new FormControl(producto.puntos)
        });
    }

    update() {
      this.productoService.update(this.productoGroup.value, this.producto_id)
        .subscribe(res => {
           //this.toastr.success('Usuario ' + this.producto.nombres + ' actualizado', 'Exito');
            this.router.navigate(['/admin/productos/listar']);
        });
    }

}
