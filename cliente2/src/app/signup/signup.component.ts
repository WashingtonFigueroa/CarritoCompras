import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuarioService} from '../pages/component/usuario/usuario.service';
import {LoginService} from '../login/login.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    errors = {
      'cuenta': '',
      'password' : ''
    };
    signupGroup: FormGroup;
    constructor(private usuarioService: UsuarioService,
                private loginService: LoginService,
                private toastr: ToastrService,
                private router: Router,
                private fb: FormBuilder) {
      this.createForm();
    }

    ngOnInit() { }

    createForm() {
      this.signupGroup = this.fb.group({
        'nombres': new FormControl('', Validators.required),
        'cuenta': new FormControl('', Validators.required),
        'password': new FormControl('', Validators.required),
        'password_confirmation': new FormControl('', Validators.required)
      });
    }
    signup() {
      this.loginService.signup(this.signupGroup.value)
        .subscribe((res: any) => {
          this.toastr.success(res.mensaje, 'Iniciando sesión');
          this.router.navigate(['/admin']);
        }, (error: any) => {
          this.errors = {
            'cuenta': '',
            'password' : ''
          };
          if (error.error.errors.password) {
            const password = error.error.errors.password;
            password.forEach((err: any) => {
              this.errors.password += ' ' + err;
            });
          }
          if (error.error.errors.cuenta) {
            const cuenta = error.error.errors.cuenta;
            cuenta.forEach((err: any) => {
              this.errors.cuenta += ' ' + err;
            });
          }
        });
    }

}
