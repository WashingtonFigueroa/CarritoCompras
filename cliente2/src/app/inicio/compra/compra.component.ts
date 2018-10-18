import { Component, OnInit } from '@angular/core';
import {InicioService} from '../inicio.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  cartItems = null;
  constructor(private inicioService: InicioService) { }

  ngOnInit() {
    this.inicioService.currentCartItems
        .subscribe((cartItems: any) => {
          this.cartItems = cartItems;
        });
  }
}
