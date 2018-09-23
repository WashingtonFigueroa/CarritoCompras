import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    errors = {
      cuenta: '',
      password: ''
    };
    loginGroup: FormGroup;
    constructor(private fb: FormBuilder,
                protected router: Router,
                private loginService: LoginService,
                private toastr: ToastrService) {
      this.createForm();
    }

    ngOnInit() {
      if (this.loginService.isLoggedIn()) {
        this.router.navigate(['/admin']);
      }
    }

    createForm() {
      this.loginGroup = this.fb.group({
        'cuenta' : new FormControl('', Validators.required),
        'password' : new FormControl('', Validators.required)
      });
    }

    login() {
      this.loginService.login(this.loginGroup.value)
          .subscribe((res: any) => {
            this.toastr.success(res.mensaje, 'Iniciando sesión');
            this.router.navigate(['/admin']);
          }, (error: any) => {
            this.errors = {
              cuenta: '',
              password: ''
            };
            if (error.status === 401) {
              this.toastr.error('Revise sus credenciales', 'Credenciales Invalidas');
            }
            console.log(error);
            if (error.error.errors.cuenta) {
              error.error.errors.cuenta.forEach((err) => {
                this.errors.cuenta = this.errors.cuenta + ' ' + err;
              });
            }
            if (error.error.errors.password) {
              error.error.errors.password.forEach((err) => {
                this.errors.password = this.errors.password + ' ' + err;
              });
            }
          });
    }


}
