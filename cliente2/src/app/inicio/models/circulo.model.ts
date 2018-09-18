import { Punto } from './punto.model';
import { Rad } from './rad.model';

declare const SVG: any;

export class Circulo {
  centro: Punto;
  radio: number;
  imagen: string;
  imagenSize: any = { width: 48, height: 48};
  imagenes: any = [];
  total: number;
  angulo: number;
  draw: any;


  constructor(centro: Punto, radio: number, imagen: string) {
    this.centro = centro;
    this.radio = radio;
    this.imagen = imagen;
    this.draw = SVG('canvas').size(800, 800);
  }

  polarToRect(angulo: number, radio: number) {
    const anguloRad = new Rad(angulo).radianes;
    const x = radio * Math.cos(anguloRad);
    const y = radio * Math.sin(anguloRad);
    return new Punto(x, y);
  }

  dibujar(angulo: number) {
    let i = 0;
    this.total = 0;
    this.angulo = angulo;
    while (i < angulo) {
      const rect = this.polarToRect(i, this.radio);
      const imagen = this.draw.image(this.imagen, this.imagenSize.width, this.imagenSize.height);
      imagen.move(this.centro.x + rect.x, this.centro.y - rect.y);
      imagen.draggable();
      this.imagenes.push(imagen);
      this.total++;
      i += 15;
    }
  }

  moverIzq() {
    for(let i = 0; i < this.total; i++) {
      const x = this.imagenes[i].node.x.animVal.value - 4;
      const y = this.imagenes[i].node.y.animVal.value;
      this.imagenes[i].move(x, y);
      console.log('x: ' + x);
      console.log('y: ' + y);
    }
  }
  moverArr() {
    for(let i = 0; i < this.total; i++) {
      const x = this.imagenes[i].node.x.animVal.value;
      const y = this.imagenes[i].node.y.animVal.value - 4;
      this.imagenes[i].move(x, y);
      console.log('x: ' + x);
      console.log('y: ' + y);
    }
  }
  moverDer() {
    for(let i = 0; i < this.total; i++) {
      const x = this.imagenes[i].node.x.animVal.value + 4;
      const y = this.imagenes[i].node.y.animVal.value;
      this.imagenes[i].move(x, y);
      console.log('x: ' + x);
      console.log('y: ' + y);
    }
  }
  moverAba() {
    for(let i = 0; i < this.total; i++) {
      const x = this.imagenes[i].node.x.animVal.value;
      const y = this.imagenes[i].node.y.animVal.value + 4;
      this.imagenes[i].move(x, y);
      console.log('x: ' + x);
      console.log('y: ' + y);
    }
  }
  mover(punto: Punto) {
    let i = 0;
    let j = 0;
    while (i < this.angulo) {
      const rect = this.polarToRect(i, this.radio);
      const imagen = this.imagenes[j];
      imagen.move(punto.x + rect.x, punto.y - rect.y);
      imagen.draggable();
      i += 15;
      j++;
    }
  }
  print() {
    console.log(this.imagenes);
  }
}
