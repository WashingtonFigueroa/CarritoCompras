import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../login/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario = null;

  constructor(private loginService: LoginService) {
    this.usuario = this.loginService.getUsuario();
  }

  ngOnInit() {
  }

}
