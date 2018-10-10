import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-header',
  templateUrl: './cliente-header.component.html',
  styleUrls: ['./cliente-header.component.css']
})
export class ClienteHeaderComponent implements OnInit {

  toggle = false;
  cuenta: any = null;
  constructor(private router: Router,
              private toastr: ToastrService) {
    if (localStorage.getItem('frado-token')) {
      this.cuenta = JSON.parse(atob(localStorage.getItem('frado-usuario'))).cuenta;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('frado-privilegios');
    localStorage.removeItem('frado-usuario');
    localStorage.removeItem('frado-token');
    this.toastr.info('Vuelva pronto :)', 'Cerrando Sesión');
    this.router.navigate(['/inicio']);
  }

  go(location) {
    this.toggle = false;
    this.router.navigate([location]);
  }

}
