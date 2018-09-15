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
@ViewChild('color1') color1;
@ViewChild('color2') color2;


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
            'material' : new FormControl(''),
            'color1' : new FormControl(''),
            'color2' : new FormControl(''),
            'imagen' : new FormControl('')
        });
    }

    store() {
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
            }else{
                form.append('categoria_id', this.productoGroup.value.categoria_id);
                form.append('nombre', this.productoGroup.value.nombre);
                form.append('descripcion', this.productoGroup.value.descripcion);
                form.append('material', this.productoGroup.value.material);
                form.append('color1',color1.value);
                form.append('color2',color2.value);
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
