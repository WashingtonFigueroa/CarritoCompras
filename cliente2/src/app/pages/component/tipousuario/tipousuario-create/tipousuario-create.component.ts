import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TipousuarioService} from '../tipousuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipousuario-create',
  templateUrl: './tipousuario-create.component.html',
  styleUrls: ['./tipousuario-create.component.css']
})
export class TipousuarioCreateComponent implements OnInit {
    tipousuarioGroup: FormGroup;
    constructor(protected fb: FormBuilder,
                protected tipousuarioService: TipousuarioService,
                protected router: Router,
    //            protected toastr: ToastrService
    ) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.tipousuarioGroup = this.fb.group({
            'nombre' : new FormControl('', [ Validators.required]),
            'descripcion' : new FormControl(''),
            'estado' : new FormControl('', [ Validators.required])
        });
    }

    store() {
        this.tipousuarioService.store(this.tipousuarioGroup.value)
            .subscribe(res => {
                this.router.navigate(['tipousuarios/listar']);
                // this.toastr.success('Cargo Guardado','Ok')
            }, ( error => {
                // this.toastr.error('Cargo Registrado','Error Cargos');
            }));
    }
}
