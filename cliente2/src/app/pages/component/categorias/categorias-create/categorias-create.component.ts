import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CategoriasService} from '../categorias.service';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-categorias-create',
  templateUrl: './categorias-create.component.html',
  styleUrls: ['./categorias-create.component.css']
})
export class CategoriasCreateComponent implements OnInit {
    @ViewChild('imagen') imagen;
    categoriaGroup: FormGroup;
    constructor(protected fb: FormBuilder,
                protected categotiaService: CategoriasService,
                protected router: Router,
                //            protected toastr: ToastrService
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.categoriaGroup = this.fb.group({
            'nombre' : new FormControl('', [ Validators.required]),
            'descripcion' : new FormControl('')
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('nombre', this.categoriaGroup.value.nombre);
            form.append('descripcion', this.categoriaGroup.value.descripcion);
        }else{
            form.append('nombre', this.categoriaGroup.value.nombre);
            form.append('descripcion', this.categoriaGroup.value.descripcion);
        }
        this.categotiaService.store(form).subscribe((res: any)=> {
            console.log('Categoria Guardado');
            // this.toastr.success(res.message, res.title, {
            //     timeOut: 1000
            // });
            this.router.navigate([environment.admin + '/categorias']);
        }, (error: any)=> {
            // this.toastr.error(error.message, error.title)
        }, () => {
            console.log('completed subscription! :D');
        });
    }
}
