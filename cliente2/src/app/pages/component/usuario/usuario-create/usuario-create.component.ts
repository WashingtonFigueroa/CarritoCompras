import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../usuario.service';
import {TipousuarioService} from '../../tipousuario/tipousuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

    tipos: any = null;
    usuarioGroup: FormGroup;

    constructor(protected usuarioService: UsuarioService,
                protected tipoService: TipousuarioService,
                protected fb: FormBuilder,
                protected router: Router,
    //            protected toartr: ToastrService
    ) {
        this.tipoService.listaCargos().subscribe(res => this.tipos = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.usuarioGroup = this.fb.group({
            'tipo_usuario_id' : new FormControl(0, [Validators.required]),
            'nombres' : new FormControl('', [Validators.required]),
            'cuenta' : new FormControl('', [Validators.required]),
            'password' : new FormControl('', [Validators.required]),
            'password_confirmation' : new FormControl('', [Validators.required])
        });
    }

    store() {
        const clave1 = this.usuarioGroup.value.password;
        const clave2 = this.usuarioGroup.value.password_confirmation;
        if (clave1 === clave2) {
            this.usuarioService.store(this.usuarioGroup.value)
                .subscribe((res: any) => {
                    if (res.error) {
                        console.log(res.error);
                    } else {
                        this.router.navigate(['/usuarios']);
                       // this.toartr.success('Usuario Guardado', 'Ok');
                    }
                }, error => {
                    // this.toartr.error('Usuaurio Registrado', 'Error Usuario');
                });
        } else {
           // this.toartr.info('Contraseñas Incorrectas','Verificar');
        }

    }

}
