import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoriasService} from "../categorias.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.css']
})
export class CategoriasEditComponent implements OnInit {
    categoria_id: number = null;
    categoria: any = null;
    categoriaGroup: FormGroup;

    constructor(protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router
                // protected toastr: ToastrService
    ) {
        this.route.params.subscribe(param => {
            this.categoria_id = param.id;
            this.categoriaService.show(param.id)
                .subscribe(res => {
                    this.categoria = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(categoria) {
        this.categoriaGroup = this.fb.group({
            'nombre' : new FormControl(categoria.nombre,[Validators.required]),
            'descripcion' : new FormControl(categoria.descripcion)
        });
    }

    update() {
        this.categoriaService.update(this.categoriaGroup.value, this.categoria_id)
            .subscribe(res => {
               // this.toastr.success('Cliente actualizado', 'Exito');
                this.router.navigate(['/admin/categorias/listar']);
            });
    }
}
