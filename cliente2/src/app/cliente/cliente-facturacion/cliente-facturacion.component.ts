import {Component, Inject, OnInit} from '@angular/core';
import {InicioService} from '../../inicio/inicio.service';
import {environment} from '../../../environments/environment.prod';
import * as jspdf from 'jspdf';
import {LoginService} from '../../login/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cliente-facturacion',
  templateUrl: './cliente-facturacion.component.html',
  styleUrls: ['./cliente-facturacion.component.css'],
  providers: [{
    provide: 'Window',
    useValue: window
  }]
})
export class ClienteFacturacionComponent implements OnInit {
  cartItems = null;
  producto_img_url = environment.base + environment.imagen.producto;
  usuario = null;
  facturacionGroup: FormGroup;
  constructor( @Inject('Window') private window: Window,
               private loginService: LoginService,
               private fb: FormBuilder,
               private inicioService: InicioService) {
    this.createForm();
    this.usuario = this.loginService.getUsuario();
  }

  ngOnInit() {
    this.inicioService.currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
      });
  }

  createForm() {
    this.facturacionGroup = this.fb.group({
      'nombres' : ['', Validators.required],
      'apellidos' : ['', Validators.required],
      'celular' : ['', Validators.required],
      'direccion' : ['', Validators.required],
      'provincia' : ['', Validators.required],
      'canton' : ['', Validators.required],
      'calle_principal' : ['', Validators.required],
      'interseccion' : ['', Validators.required],
      'numero_domicilio' : ['', Validators.required],
      'referencia' : ['', Validators.required],
      'fecha' : [new Date(), Validators.required],
      'total' : [0, Validators.required],
      'estado' : ['pendiente', Validators.required],
    });
  }

  store() {

  }
  procesar() {
    const doc = new jspdf('p','mm','letter');
    doc.setFontSize(10);
    doc.text('Frado', 190,20);
    doc.text('+593 98 445 9620', 171, 26);
    doc.text('www.frado.ec', 178, 32);
    doc.addImage('../../../assets/images/logo.png', 'png', 20, 17, 37, 18, '', 'NONE',0);
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    doc.text('Factura', 100, 42);
    doc.setFontSize(10);
    doc.setFontStyle('bold');
    doc.text('Detalles de Facturación:', 20, 52);
    doc.text('Cobrar a:', 150, 52);
    /*Cobrar a: */
    doc.setFontStyle('normal');
    doc.text(this.usuario.nombres, 150, 60);
    doc.text('direccion', 150, 65);
    doc.save('example.pdf');
  }


}
