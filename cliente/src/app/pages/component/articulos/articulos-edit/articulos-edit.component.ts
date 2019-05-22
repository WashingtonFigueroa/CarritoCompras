import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ArticulosService} from '../articulos.service';
import {ProductoService} from '../../producto/producto.service';

@Component({
  selector: 'app-articulos-edit',
  templateUrl: './articulos-edit.component.html',
  styleUrls: ['./articulos-edit.component.css']
})
export class ArticulosEditComponent implements OnInit {
    @ViewChild ('imagen') imagen;
    productos: any = null;
    imagen_id: number = null;
    articulo: any = null;
    articuloGroup: FormGroup;

    constructor(protected articuloService: ArticulosService,
                protected productoService: ProductoService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.productoService.lista_productos().subscribe(res => this.productos = res);
        this.route.params.subscribe(param => {
            this.imagen_id = param.id;
            this.articuloService.show(param.id).subscribe(res => {
                this.articulo = res;
                this.createForm(res);
            });
        });
    }

    ngOnInit() {
    }

    createForm(articulo) {
        this.articuloGroup = this.fb.group({
            'producto_id' : new FormControl(articulo.producto_id, [Validators.required]),
            'imagen': new FormControl('')
        });
    }

    update() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('producto_id', this.articuloGroup.value.producto_id);
            this.articuloService.update(form, this.imagen_id)
                .subscribe(res => {
                    this.toastr.success('Producto ' + this.articulo.nombres + ' actualizado', 'Exito');
                    this.router.navigate(['/admin/articulos/listar']);
                });
        }else {
            this.toastr.info('Seleccione una Imagen');
        }
    }
}
