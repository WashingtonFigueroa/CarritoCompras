import {Component, Inject, OnInit} from '@angular/core';
import {InicioService} from '../../inicio/inicio.service';
import {environment} from '../../../environments/environment.prod';
import * as jspdf from 'jspdf';
import {LoginService} from '../../login/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';
import {UsuarioService} from '../../pages/component/usuario/usuario.service';
import { DecimalPipe } from '@angular/common';

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
               private usuarioService: UsuarioService,
               private fb: FormBuilder,
               private router: Router,
               private dp: DecimalPipe,
               private inicioService: InicioService) {
    this.usuario = this.loginService.getUsuario();
    this.inicioService
      .currentCartItems
      .subscribe((cartItems: any) => {
        this.cartItems = cartItems;
        console.log(this.cartItems);
        if (this.inicioService.isEmpty()) {
          this.router.navigate(['/cliente/compras']);
        }
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
      'nombres' : [this.usuario.nombres, Validators.required],
      'apellidos' : ['', Validators.required],
      'celular' : ['', Validators.required],
      'direccion' : ['', Validators.required],
      'provincia' : ['', Validators.required],
      'canton' : ['', Validators.required],
      'calle_principal' : ['', Validators.required],
      'interseccion' : ['', Validators.required],
      'numero_domicilio' : ['', Validators.required],
      'referencia' : [''],
      'fecha' : [formattedDate, Validators.required],
      'total' : [cartItems.subtotal],
      'estado' : ['pendiente', Validators.required],
      'cart_items' : [this.cartItems],
    });
  }

  store() {
    this.clienteService
      .facturar(this.facturacionGroup.value)
      .subscribe((data: any) => {
        console.log(data);
        this.usuarioService.setUsuario(data.usuario);
        this.router.navigate(['/cliente/compras']);
        this.renderPDF(data.compra);
        this.inicioService.resetCartItems();
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
    doc.text('Factura ' + this.dp.transform(compra.compra_id, '3.0-0') , 95, 42);
    doc.setFontSize(10);
    doc.setFontStyle('bold');
    doc.text('Detalles de Facturación:', 20, 52);
    doc.text('Cobrar a:', 150, 52);

    /*Detalles de facturacion: */
    doc.setFontStyle('normal');
    doc.text('Bancho Pichincha', 20, 60);
    doc.text('Cta. Ahorros #220243200', 20, 65);
    doc.text('Nombre: Francisco Maldonado', 20, 70);
    doc.text('Cédula: 1723082002', 20, 75);
    doc.text('Email: fradostore@gmail.com', 20, 80);

    /*Cobrar a: */
    doc.setFontStyle('normal');
    doc.text(this.facturacionGroup.value.nombres + ' ' + this.facturacionGroup.value.apellidos, 150, 60);
    doc.text(this.facturacionGroup.value.provincia, 150, 65);
    doc.text(this.facturacionGroup.value.canton, 150, 70);
    doc.text(this.facturacionGroup.value.direccion, 150, 75);
    doc.text(this.facturacionGroup.value.celular, 150, 80);

    const fromX = 20;
    const toX = 200;
    let y = 90;
    const width = (toX - fromX) / 6;
    doc.line(fromX, y, toX, y);
    y += 6;
    doc.setFontStyle('bold');
    doc.text('N.', fromX + 0.2 * width, y);
    doc.text('Producto', fromX + 1.2 * width - width / 2, y);
    doc.text('Talla', fromX + 2.2 * width + width / 3, y);
    doc.text('Cantidad', fromX + 3.2 * width, y);
    doc.text('Precio', fromX + 4.2 * width, y);
    doc.text('Total', fromX + 5.2 * width, y);
    y += 4;
    doc.line(fromX, y, toX, y);
    doc.setFontStyle('normal');
    let count = 0;
    this.cartItems.items.forEach((item: any) => {
      count++;
      y += 6;
      let subtotal: any = (item.cantidad * item.precio);
      subtotal = this.dp.transform(subtotal, '1.2-2');
      doc.text(count + ' ', fromX + 0.2 * width, y);
      doc.text(item.producto.nombre, fromX + 1.2 * width - width / 2, y);
      doc.text(item.talla, fromX + 2.2 * width + width / 3, y);
      doc.text(item.cantidad + ' ', fromX + 3.2 * width, y);
      doc.text(item.precio + ' ', fromX + 4.2 * width, y);
      doc.text('$' + subtotal + ' ', fromX + 5.2 * width, y);
      y += 4;
      doc.line(fromX, y, toX, y);
    });
    y += 6;
    doc.text('Total', fromX + 4.2 * width, y);
    doc.setFontStyle('bold');
    this.cartItems.subtotal = this.dp.transform(this.cartItems.subtotal, '1.2-2');
    doc.text('$' + this.cartItems.subtotal, fromX + 5.2 * width, y);
    y += 4;
    doc.line(fromX + 4.2 * width, y, toX, y);
    doc.save('factura.pdf');
  }

  procesar() {
    this.store();
  }


}