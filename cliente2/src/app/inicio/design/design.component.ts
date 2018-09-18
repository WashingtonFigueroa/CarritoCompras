import { Component, OnInit } from '@angular/core';
import { Punto } from '../models/punto.model';
import { Circulo } from '../models/circulo.model';

declare const SVG: any;
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  imagen = '';
  circulo: any;
  constructor() { }

  ngOnInit() {
    this.imagen = 'http://pngimage.net/wp-content/uploads/2018/05/bolita-png-6.png';
    this.circulo = new Circulo(new Punto( 380, 250 ), 120, this.imagen);
    this.circulo.dibujar(360);
  }

  /*redraw(e) {
    console.log(e);
    this.circulo = new Circulo(new Punto( e.offsetX, e.offsetY ), 200, this.imagen);
    this.circulo.dibujar(360);
    this.circulo.print();
  }*/

  redraw(e) {
    this.circulo.mover(new Punto( e.offsetX, e.offsetY ));
  }

  moverIzq() {
    this.circulo.moverIzq();
  }
  moverArr() {
    this.circulo.moverArr();
  }
  moverDer() {
    this.circulo.moverDer();
  }
  moverAba() {
    this.circulo.moverAba();
  }
  girarIzq() {
    this.circulo.girarIzq();
  }
  girarDer() {
    this.circulo.girarDer();
  }
}
