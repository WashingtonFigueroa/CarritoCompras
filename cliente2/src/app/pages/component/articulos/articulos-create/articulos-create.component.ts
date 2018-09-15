import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../producto/producto.service";
import {CategoriasService} from "../../categorias/categorias.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment.prod";

@Component({
  selector: 'app-articulos-create',
  templateUrl: './articulos-create.component.html',
  styleUrls: ['./articulos-create.component.css']
})
export class ArticulosCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    categorias: any = null;
    articuloGroup: FormGroup;

    constructor(protected articuloService: ProductoService,
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
        this.articuloGroup = this.fb.group({
            'categoria_id' : new FormControl(0, [Validators.required]),
            'nombre' : new FormControl(''),
            'descripcion' : new FormControl(''),
            'imagen' : new FormControl(''),
            'puntos' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('categoria_id', this.articuloGroup.value.categoria_id);
            form.append('nombre', this.articuloGroup.value.nombre);
            form.append('descripcion', this.articuloGroup.value.descripcion);
        }else{
            form.append('categoria_id', this.articuloGroup.value.categoria_id);
            form.append('nombre', this.articuloGroup.value.nombre);
            form.append('descripcion', this.articuloGroup.value.descripcion);
        }
        this.articuloService.store(form).subscribe((res: any)=> {
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
