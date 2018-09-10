import { Component, OnInit } from '@angular/core';
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
        this.categotiaService.store(this.categoriaGroup.value)
            .subscribe(res => {
                this.router.navigate([ environment.admin + '/categorias/listar']);
                // this.toastr.success('Cargo Guardado','Ok')
            }, ( error => {
                // this.toastr.error('Cargo Registrado','Error Cargos');
            }));
    }
}
