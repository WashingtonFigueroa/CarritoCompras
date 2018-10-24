import {Component, Inject, OnInit} from '@angular/core';
import {InicioService} from '../../inicio/inicio.service';
import {environment} from '../../../environments/environment.prod';
import * as jspdf from 'jspdf';
import {LoginService} from '../../login/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';

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
               private clienteService: ClienteService,
               private fb: FormBuilder,
               private inicioService: InicioService) {
    this.usuario = this.loginService.getUsuario();
    this.inicioService
      .currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
        this.createForm(cartItems);
      });
  }

  ngOnInit() {
  }

  createForm(cartItems) {
    const date = new Date();
    const formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    this.facturacionGroup = this.fb.group({
      'usuario_id' : [this.loginService.getUsuario().usuario_id, Validators.required],
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
      'fecha' : [formattedDate, Validators.required],
      'total' : [cartItems.subtotal],
      'estado' : ['pendiente', Validators.required],
    });
  }

  store() {
    this.clienteService
      .facturar(this.facturacionGroup.value)
      .subscribe((compra: any) => {
        console.log(compra);
        this.renderPDF(compra);
      });
  }

  renderPDF(compra) {
    const doc = new jspdf('p', 'mm', 'letter');
    doc.setFontSize(10);
    doc.text('Frado', 190,20);
    doc.text('+593 98 445 9620', 171, 26);
    doc.text('www.frado.ec', 178, 32);
    doc.addImage('../../../assets/images/logo.png', 'png', 20, 17, 37, 18, '', 'NONE',0);
    doc.setFontSize(16);
    doc.setFontStyle('bold');
    doc.text('Factura ' + compra.compra_id, 95, 42);
    doc.setFontSize(10);
    doc.setFontStyle('bold');
    doc.text('Detalles de Facturación:', 20, 52);
    doc.text('Cobrar a:', 150, 52);
    /*Cobrar a: */
    doc.setFontStyle('normal');
    doc.text(this.facturacionGroup.value.nombres + ' ' + this.facturacionGroup.value.apellidos, 150, 60);
    doc.text(this.facturacionGroup.value.provincia, 150, 65);
    doc.text(this.facturacionGroup.value.canton, 150, 70);
    doc.text(this.facturacionGroup.value.direccion, 150, 75);
    doc.text(this.facturacionGroup.value.celular, 150, 80);
    doc.save('factura.pdf');
  }

  procesar() {
    this.store();
  }


}
