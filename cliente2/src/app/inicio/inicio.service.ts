import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from '../../environments/environment.prod';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private cartItems = new BehaviorSubject({
    'cantidad_total' : 0,
    'subtotal' : 0,
    'items' : []
  });

  currentCartItems = this.cartItems.asObservable();

  base = environment.base;
  constructor(private http: HttpClient) { }

  categorias() {
    return this.http.get(`${this.base}lista_categorias`);
  }

  changeCartItems(cartItems: any) {
    this.cartItems.next(cartItems);
  }

  resetCartItems() {
    const cartItems = {
      'cantidad_total' : 0,
      'subtotal' : 0,
      'items' : []
    };
    this.cartItems.next(cartItems);
  }

  isEmpty() {
    return this.cartItems.getValue().subtotal === 0;
  }
}
