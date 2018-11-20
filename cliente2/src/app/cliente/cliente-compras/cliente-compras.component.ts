import {Component, OnInit, ViewChild} from '@angular/core';
import {ComprasService} from '../../pages/component/compras/compras.service';
import {LoginService} from '../../login/login.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-compras',
  templateUrl: './cliente-compras.component.html',
  styleUrls: ['./cliente-compras.component.css']
})
export class ClienteComprasComponent implements OnInit {
  @ViewChild('comprobante') comprobante;
  @ViewChild('overlay') overlay;
  @ViewChild('popup') popup;
  usuario: any = null;
  compras: any = null;
  compra_id: any = null;
  closeResult: string;
  detallesCompras: any = null;
  constructor(private compraService: ComprasService,
              private modalService: NgbModal,
              private toastr: ToastrService,
              private loginService: LoginService) {
    this.usuario = this.loginService.getUsuario();
    this.compraService.misCompras(this.usuario.usuario_id)
        .subscribe(res => {
          this.compras = res;
        });
  }

  ngOnInit() {
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'por presionar ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `por: ${reason}`;
    }
  }

  upload(compra_id) {
    const comprobante = this.comprobante.nativeElement;
    if ( comprobante.files[0] ) {
      const form = new FormData();
      form.append('comprobante', comprobante.files[0]);
      this.compraService.uploadComprobante(compra_id, form)
        .subscribe((res: any) => {
          if (res.estado === 'exito') {
            this.compraService.misCompras(this.usuario.usuario_id)
              .subscribe((res2: any) => {
                this.compras = res2;
              });
            this.toastr.success('El comprobante fue subido exitosamente', 'Exito');
          } else {
            this.toastr.error('El comprobante no pudo ser subido', 'Error');
          }
        });
    }

  }

  openModal(contenido, compra_id) {
    this.compra_id = compra_id;
    this.compraService.detallesCompras(compra_id)
      .subscribe(res => {
        this.detallesCompras = res;
      });
    this.overlay.nativeElement.classList.add('active');
    this.popup.nativeElement.classList.add('active');
  }

  closeModal() {
    this.overlay.nativeElement.classList.remove('active');
    this.popup.nativeElement.classList.remove('active');
  }


}
