import { Punto } from './punto.model';
import { Rad } from './rad.model';

declare const SVG: any;

export class Circulo {
  centro: Punto;
  radio: number;
  imagen: string;
  imagenSize: any = { width: 36, height: 36};
  imagenes: any = [];
  total: number;
  angulo: number;
  draw: any;

  selectedItems: any = [];
  renderizado = false;

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
      let imagen = null;
/*      if (i % 45 === 0) {
        imagen = this.draw.image('http://urnas.biz/wp-content/uploads/2015/11/Dije-Ivi.png', this.imagenSize.width, this.imagenSize.height);
      } else {
        imagen = this.draw.image(this.imagen, this.imagenSize.width, this.imagenSize.height);
      }*/
      imagen = this.draw.image(this.imagen, this.imagenSize.width, this.imagenSize.height);
      console.log(imagen);
      imagen.on('click', () => {
        imagen.selectize({points: []});
        this.selectedItems.push(imagen);
        console.log(imagen);
      });
      imagen.move(this.centro.x + rect.x, this.centro.y - rect.y);
      imagen.draggable();
      this.imagenes.push(imagen);
      this.total++;
      i += 15;
    }
    console.log('total: ' + this.total);
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
  girar2(angulo: number ) {
    const rad = new Rad(angulo).radianes;
    for ( let i = 0; i < this.total; i++) {
      const vx = this.imagenes[i].node.x.animVal.value;
      const vy = this.imagenes[i].node.y.animVal.value;
      const nx = vx * Math.cos(rad) - vy * Math.sin(rad);
      const ny = vx * Math.sin(rad) + vy * Math.cos(rad);
      const imagen = this.imagenes[i];
      imagen.move(nx, ny);
      imagen.draggable();
    }
  }
  girarIzq() {
    /*current x and y*/
    const cx = this.imagenes[0].node.x.animVal.value;
    const cy = this.imagenes[0].node.y.animVal.value;
    for ( let i = 0; i < this.total - 1; i++) {
      /*next x and y*/
      const nx = this.imagenes[i + 1].node.x.animVal.value;
      const ny = this.imagenes[i + 1].node.y.animVal.value;
      const imagen = this.imagenes[i];
      imagen.move(nx, ny);
      imagen.draggable();
    }
    const lastImage = this.imagenes[this.total - 1];
    lastImage.move(cx, cy);
    lastImage.draggable();
  }
  girarDer() {
    /*current x and y*/
    const cx = this.imagenes[this.total - 1].node.x.animVal.value;
    const cy = this.imagenes[this.total - 1].node.y.animVal.value;
    for ( let i = this.total - 1; i > 0; i--) {
      /*next x and y*/
      const nx = this.imagenes[i - 1].node.x.animVal.value;
      const ny = this.imagenes[i - 1].node.y.animVal.value;
      const imagen = this.imagenes[i];
      imagen.move(nx, ny);
      imagen.draggable();
    }
    const firstImage = this.imagenes[0];
    firstImage.move(cx, cy);
    firstImage.draggable();
  }
  cambiarItems(imagen) {
    this.renderizado = true;
    for (let i = 0; i < this.total ; i++) {
      this.imagenes[i].node.href.baseVal = imagen;
    }
  }
  cambiarItem(imagen) {
    this.selectedItems.forEach(item => {
      item.node.href.baseVal = imagen;
    });
    this.imagenes.forEach( (img)  => {
      img.selectize(false);
    });
    this.selectedItems = [];
  }
  print() {
    console.log(this.imagenes);
  }
}
