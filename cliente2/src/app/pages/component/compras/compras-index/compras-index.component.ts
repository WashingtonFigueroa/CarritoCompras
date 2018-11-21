import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {ComprasService} from '../../compras/compras.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-compras-index',
  templateUrl: './compras-index.component.html',
  styleUrls: ['./compras-index.component.css']
})
export class ComprasIndexComponent implements OnInit {
  @ViewChild('overlay') overlay;
  @ViewChild('popup') popup;

  compras: any = [];
  index: number = null;
  categoria_id: number = null;
  closeResult: string;
  search = '';
  pages: any = [];
  prev_page: any = null;
  next_page: any = null;
  environment = environment;
  base = environment.base;
  compra: any = null;
  constructor(protected comprasService: ComprasService,
              protected modalService: NgbModal,
              protected toastr: ToastrService,
              protected router: Router) {}

  ngOnInit() {
    this.comprasService.index().subscribe((res: any) => {
      this.compras = res.data;
      this.getPages(res.last_page);
      this.prev_page = res.prev_page_url;
      this.next_page = res.next_page_url;
    });
  }

  buscar(search) {
    this.comprasService.buscarCompras({search: search})
      .subscribe((res: any) => {
        this.compras = res.data;
        this.getPages(res.last_page);
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }

  getPages(last_page) {
    this.pages = [];
    for (let i = 1; i <= last_page; i++ ) {
      this.pages.push(
        {
          url: this.environment.base + 'compras?page=' + i ,
          item: i
        }
      );
    }
  }
  loadPagination(url) {
    this.comprasService.indexPerPage(url)
      .subscribe((res: any) => {
        this.compras = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }
  prevPage() {
    this.comprasService.indexPerPage(this.prev_page)
      .subscribe( (res: any) => {
        this.compras = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }
  nextPage() {
    this.comprasService.indexPerPage(this.next_page)
      .subscribe( (res: any) => {
        this.compras = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }

  destroy(index, id) {
    this.comprasService.destroy(id)
      .subscribe(res => {
        this.compras.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate([this.environment.admin + '/compras/editar/' + id]);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  confirm(index, id, confirmModal) {
    this.index = index;
    this.categoria_id = id;
    this.modalService.open(confirmModal).result.then((result) => {
      if (result === 'si') {
        this.destroy(index, id);
      } else {
        console.log(result);
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      console.log('cancel');
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateNumGuia(compra) {
    if ( compra.estado === 'verificando comprobante' || compra.estado === 'completado') {
      this.router.navigate(['/admin/compras/editar/' + compra.compra_id]);
    } else {
      this.toastr.error('El cliente no subió su comprobante', 'Error');
    }
  }

  openModal(compra) {
    this.compra = compra;
    this.overlay.nativeElement.classList.add('active');
    this.popup.nativeElement.classList.add('active');
  }

  closeModal() {
    this.overlay.nativeElement.classList.remove('active');
    this.popup.nativeElement.classList.remove('active');
  }
}
