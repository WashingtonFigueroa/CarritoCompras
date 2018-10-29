import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../../pages/component/usuario/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  usuarioGroup: FormGroup;
  usuario = null;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private usuarioService: UsuarioService) {
    this.route.params.subscribe((param: any) => {
      this.usuarioService.show(param.usuario_id)
        .subscribe((usuario: any) => {
          this.usuario = usuario;
          console.log(usuario);
          this.createForm(usuario);
        });
    });
  }

  createForm(usuario) {
    this.usuarioGroup = this.fb.group({
      nombres : new FormControl(usuario.nombres, Validators.required),
      cuenta: new FormControl(usuario.cuenta, Validators.required)
    });
  }
  ngOnInit() {
  }

  update() {
    this.usuarioService.update(this.usuarioGroup.value, this.usuario.usuario_id)
      .subscribe((res: any) => {
        this.usuarioService.setUsuario(res);
        this.toastr.success('Actualizado exitosamente', '¡Éxito!');
        if (this.router.url === '/cliente/editar-usuario/' + this.usuario.usuario_id) {
          this.router.navigate(['/cliente/perfil']);
        } else {
          this.router.navigate(['/admin/perfil']);
        }
      });
  }

}
