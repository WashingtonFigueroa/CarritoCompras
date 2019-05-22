import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductoService} from '../producto.service';
import {CategoriasService} from '../../categorias/categorias.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {
    @ViewChild ('imagen') imagen;
    @ViewChild('color1') color1;
    @ViewChild('color2') color2;
    categorias: any = null;
    producto_id: number = null;
    producto: any = null;
    productoGroup: FormGroup;

    constructor(protected productoService: ProductoService,
                protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
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
            'nombre': new FormControl(producto.nombre, [Validators.required]),
            'descripcion' : new FormControl(producto.descripcion),
            'material' : new FormControl(producto.material),
            'color1': new FormControl(producto.color1),
            'color2': new FormControl(producto.color2),
            'imagen': new FormControl('')
        });
    }

    update() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        const color1 = this.color1.nativeElement;
        const color2 = this.color2.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('categoria_id', this.productoGroup.value.categoria_id);
            form.append('nombre', this.productoGroup.value.nombre);
            form.append('descripcion', this.productoGroup.value.descripcion);
            form.append('material', this.productoGroup.value.material);
            form.append('color1',color1.value);
            form.append('color2',color2.value);
            this.productoService.update(form, this.producto_id)
                .subscribe(res => {
                    this.toastr.success('Producto ' + this.producto.nombres + ' actualizado', 'Exito');
                    this.router.navigate(['/admin/productos/listar']);
                });
        }else {
            this.toastr.info('Seleccione una Imagen');
        }
    }
}
