import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TipousuarioService} from '../tipousuario.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment.prod';

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
            'estado' : new FormControl('activo', [ Validators.required])
        });
    }

    store() {
        this.tipousuarioService.store(this.tipousuarioGroup.value)
            .subscribe(res => {
                console.log(res);
                this.router.navigate([environment.admin + '/tipousuarios/listar']);
                // this.toastr.success('Cargo Guardado','Ok')
            }, ( error => {
                // this.toastr.error('Cargo Registrado','Error Cargos');
            }));
    }
}
