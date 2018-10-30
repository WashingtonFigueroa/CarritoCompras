import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../usuario.service';
import {TipousuarioService} from '../../tipousuario/tipousuario.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

    usuarioGroup: FormGroup;
    constructor(protected usuarioService: UsuarioService,
                protected tipoService: TipousuarioService,
                protected fb: FormBuilder,
                protected router: Router,
                protected toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.usuarioGroup = this.fb.group({
            'tipo_usuario' : new FormControl('cliente', [Validators.required]),
            'nombres' : new FormControl('', [Validators.required]),
            'cuenta' : new FormControl('', [Validators.required]),
            'password' : new FormControl('', [Validators.required]),
            'password_confirmation' : new FormControl('', [Validators.required]),
            'puntos' : new FormControl(0)
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
                        this.router.navigate(['/admin/usuarios/listar']);
                       this.toastr.success('Usuario Guardado', 'Ok');
                    }
                }, error => {
                  this.toastr.error('Usuaurio Registrado', 'Error Usuario');
                });
        } else {
          this.toastr.info('Contraseñas Incorrectas','Verificar');
        }

    }

}
