import { Component, OnInit } from '@angular/core';
import {ComprasService} from '../../pages/component/compras/compras.service';
import {LoginService} from '../../login/login.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cliente-compras',
  templateUrl: './cliente-compras.component.html',
  styleUrls: ['./cliente-compras.component.css']
})
export class ClienteComprasComponent implements OnInit {

  usuario: any = null;
  compras: any = null;
  closeResult: string;
  constructor(private compraService: ComprasService,
              private modalService: NgbModal,
              private loginService: LoginService) {
    this.usuario = this.loginService.getUsuario();
    this.compraService.misCompras(this.usuario.usuario_id)
        .subscribe(res => {
          console.log(res);
          this.compras = res;
        });
  }

  ngOnInit() {
  }

  openDetalles(contenido) {
    this.modalService.open(contenido, { size: 'lg'}).result.then((result) => {
      this.closeResult = `Cerrado por ${result}`;
    }, (reason) => {
      this.closeResult = `Cerrado por ${this.getDismissReason(reason)}`;
    });
  }
  close() {
    this.modalService
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

}
