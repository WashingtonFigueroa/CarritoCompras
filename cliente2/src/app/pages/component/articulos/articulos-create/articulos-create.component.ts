import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../producto/producto.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment.prod";
import {ArticulosService} from "../articulos.service";

@Component({
  selector: 'app-articulos-create',
  templateUrl: './articulos-create.component.html',
  styleUrls: ['./articulos-create.component.css']
})
export class ArticulosCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    productos: any = null;
    articuloGroup: FormGroup;

    constructor(protected articuloService: ArticulosService,
                protected productoService: ProductoService,
                protected fb: FormBuilder,
                protected router: Router,
                //            protected toartr: ToastrService
    ) {
        this.productoService.lista_productos().subscribe(res => this.productos = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.articuloGroup = this.fb.group({
            'producto_id' : new FormControl(0, [Validators.required]),
            'imagen' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('producto_id', this.articuloGroup.value.producto_id);
        }else{
            console.log('ingrese imagen');
        }
        this.articuloService.store(form).subscribe((res: any)=> {
            console.log(res);
            // this.toastr.success(res.message, res.title, {
            //     timeOut: 1000
            // });
           // this.router.navigate([environment.admin + '/articulos']);
        }, (error: any)=> {
            // this.toastr.error(error.message, error.title)
        }, () => {
            console.log('completed subscription! :D');
        });
    }
}
