import { Component, AfterViewInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ap-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {

  toggle = false;
  cuenta: any = null;
  constructor(private router: Router) {
    if (localStorage.getItem('frado-token')) {
      this.cuenta = JSON.parse(atob(localStorage.getItem('frado-usuario'))).cuenta;
    }
  }
  logout() {
    localStorage.removeItem('frado-privilegios');
    localStorage.removeItem('frado-usuario');
    localStorage.removeItem('frado-token');
    this.router.navigate(['/inicio']);
  }
  go(place) {
    this.toggle = false;
    this.router.navigate(['/admin/' + place]);
  }
}
