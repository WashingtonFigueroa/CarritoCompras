import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../login/login.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  usuarioGroup: FormGroup;
  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private loginService: LoginService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.usuarioGroup = this.fb.group({
      'current_password' : new FormControl('', Validators.required),
      'new_password' : new FormControl('', Validators.required),
      'confirmation_password' : new FormControl('', Validators.required)
    });
  }

  cambiarPassword() {
    this.loginService.changePassword(this.usuarioGroup.value)
      .subscribe((res: any) => {
        if (res.success) {
          if (this.router.url === '/admin/cambiar-password') {
            this.router.navigate(['/admin/perfil']);
          } else {
            this.router.navigate(['/cliente/perfil']);
          }
          this.toastr.success(res.message, '¡Éxito!');
        } else {
          this.toastr.error(res.message, '¡Error!');
        }
      });
  }
}
