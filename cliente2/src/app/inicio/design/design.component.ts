import { Component, OnInit } from '@angular/core';
import { Punto } from '../models/punto.model';
import { Circulo } from '../models/circulo.model';
import {ManillasService} from '../../pages/component/manillas/manillas.service';
import {environment} from '../../../environments/environment.prod';

declare const SVG: any;
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  imagen = '';
  circulo: any;
  pulseras: any = null;
  dijes: any = null;
  separadores: any = null;
  env = environment;

  constructor(private manillaService: ManillasService) {
      const tipos = ['Pulsera', 'Dije', 'Separador'];
      tipos.forEach(tipo => {
        this.manillaService.tipo_manillas(tipo)
          .subscribe((res: any) => {
              switch (tipo) {
                case 'Pulsera' :
                  this.pulseras = res;
                break;
                case 'Dije' : this.dijes = res; break;
                case 'Separador' : this.separadores = res; break;
              }
          });
      });

  }
  ngOnInit() {
    this.circulo = new Circulo(new Punto( 380, 250 ), 150, '');
    this.circulo.dibujar(360);
  }
  /*  init(pulseras) {
      this.imagen = this.env.base + this.env.imagen.manilla + pulseras[0].manilla_id;
      this.circulo = new Circulo(new Punto( 380, 250 ), 150, this.imagen);
      this.circulo.dibujar(360);
    }*/



  /*redraw(e) {
    console.log(e);
    this.circulo = new Circulo(new Punto( e.offsetX, e.offsetY ), 200, this.imagen);
    this.circulo.dibujar(360);
    this.circulo.print();
  }*/

  redraw(e) {
    console.log('lectura');
    console.log(e);
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
  cambiarPulseras() {
    this.circulo.renderizado = false;
  }
  cambiarItems(item_id) {
    if (this.circulo.renderizado) {
      this.cambiarItem(item_id);
    } else {
      const imagen = this.env.base + this.env.imagen.manilla + item_id;
      this.circulo.cambiarItems(imagen);
    }
  }
  cambiarItem(item_id) {
    const imagen = this.env.base + this.env.imagen.manilla + item_id;
    this.circulo.cambiarItem(imagen);
  }
}
