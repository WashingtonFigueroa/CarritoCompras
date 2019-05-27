import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoriasService} from '../categorias.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-categorias-edit',
  templateUrl: './categorias-edit.component.html',
  styleUrls: ['./categorias-edit.component.css']
})
export class CategoriasEditComponent implements OnInit {
@ViewChild('imagen') imagen;
    categoria_id: number = null;
    categoria: any = null;
    categoriaGroup: FormGroup;

    constructor(protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService
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
            'nombre' : new FormControl(categoria.nombre, [Validators.required]),
            'descripcion' : new FormControl(categoria.descripcion),
            'imagen' : new FormControl('')
        });
    }

    update() {
        const form = new FormData();
        const  file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('nombre', this.categoriaGroup.value.nombre.toUpperCase());
            form.append('descripcion', this.categoriaGroup.value.descripcion);
            this.categoriaService.update(form, this.categoria_id)
                .subscribe(res => {
                    this.toastr.success('Categoria actualizada', 'Exito');
                    this.router.navigate(['/admin/categorias/listar']);
                   // location.reload();
                });
        }else {
            this.toastr.info('Seleccione la Imagen');
        }

    }
}
