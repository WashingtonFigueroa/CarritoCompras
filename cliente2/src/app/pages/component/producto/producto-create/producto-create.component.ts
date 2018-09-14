import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductoService} from '../producto.service';
import {CategoriasService} from '../../categorias/categorias.service';
import {environment} from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {
@ViewChild('imagen') imagen;
    categorias: any = null;
    productoGroup: FormGroup;

    constructor(protected productoService: ProductoService,
                protected categoriaService: CategoriasService,
                protected fb: FormBuilder,
                protected router: Router,
                //            protected toartr: ToastrService
    ) {
        this.categoriaService.lista_categorias().subscribe(res => this.categorias = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.productoGroup = this.fb.group({
            'categoria_id' : new FormControl(0, [Validators.required]),
            'nombre' : new FormControl(''),
            'descripcion' : new FormControl(''),
            'stock' : new FormControl(1),
            'material' : new FormControl(''),
            'color1' : new FormControl(''),
            'color2' : new FormControl(''),
            'talla' : new FormControl(''),
            'precio' : new FormControl('', [Validators.required]),
            'imagen' : new FormControl(''),
            'puntos' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
            if (file.files[0]) {
                form.append('imagen', file.files[0]);
                form.append('categoria_id', this.productoGroup.value.categoria_id);
                form.append('nombre', this.productoGroup.value.nombre);
                form.append('descripcion', this.productoGroup.value.descripcion);
                form.append('stock', this.productoGroup.value.stock);
                form.append('material', this.productoGroup.value.material);
                form.append('color1', this.productoGroup.value.color1);
                form.append('color2', this.productoGroup.value.color2);
                form.append('talla', this.productoGroup.value.talla);
                form.append('precio', this.productoGroup.value.precio);
                form.append('puntos', this.productoGroup.value.puntos);
            }else{
                form.append('categoria_id', this.productoGroup.value.categoria_id);
                form.append('nombre', this.productoGroup.value.nombre);
                form.append('descripcion', this.productoGroup.value.descripcion);
                form.append('stock', this.productoGroup.value.stock);
                form.append('material', this.productoGroup.value.material);
                form.append('color1', this.productoGroup.value.color1);
                form.append('color2', this.productoGroup.value.color2);
                form.append('talla', this.productoGroup.value.talla);
                form.append('precio', this.productoGroup.value.precio);
                form.append('puntos', this.productoGroup.value.puntos);
            }
            this.productoService.store(form).subscribe((res: any)=> {
                    console.log('Movimiento guardado');
                    // this.toastr.success(res.message, res.title, {
                    //     timeOut: 1000
                    // });
                this.router.navigate([environment.admin + '/productos']);
                }, (error: any)=> {
                   // this.toastr.error(error.message, error.title)
                }, () => {
                    console.log('completed subscription! :D');
                });
    }
}
