import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../../producto/producto.service';
import {environment} from '../../../../../environments/environment.prod';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {DescripcionProductoService} from '../descripcion-producto.service';

@Component({
  selector: 'app-descripcion-producto-index',
  templateUrl: './descripcion-producto-index.component.html',
  styleUrls: ['./descripcion-producto-index.component.css']
})
export class DescripcionProductoIndexComponent implements OnInit {

  descripcion_productos: any = [];
  index: number = null;
  producto_id: number = null;
  descripcion_producto_id: number = null;
  closeResult: string;
  search = '';
  pages: any = [];
  prev_page: any = null;
  next_page: any = null;
  environment = environment;

  constructor(protected productoService: ProductoService,
              protected descripcionProductoService: DescripcionProductoService,
              protected modalService: NgbModal,
              protected route: ActivatedRoute,
              protected router: Router) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.producto_id = params.producto_id;
      console.log('producto_id: ' + params.producto_id);
      this.productoService.listar_descripcion_productos(params.producto_id).subscribe((res: any) => {
        this.descripcion_productos = res.data;
        this.getPages(res.last_page);
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
    });

  }

  buscar(search) {
    this.descripcionProductoService.buscar({search: search})
      .subscribe((res: any) => {
        this.descripcion_productos = res.data;
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
          url: this.environment.base + 'descripcion_productos?page=' + i ,
          item: i
        }
      );
    }
  }
  loadPagination(url) {
    this.descripcionProductoService.indexPerPage(url)
      .subscribe((res: any) => {
        this.descripcion_productos = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }
  prevPage() {
    this.descripcionProductoService.indexPerPage(this.prev_page)
      .subscribe( (res: any) => {
        this.descripcion_productos = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }
  nextPage() {
    this.descripcionProductoService.indexPerPage(this.next_page)
      .subscribe( (res: any) => {
        this.descripcion_productos = res.data;
        this.prev_page = res.prev_page_url;
        this.next_page = res.next_page_url;
      });
  }

  destroy(index, id) {
    this.descripcionProductoService.destroy(id)
      .subscribe(res => {
        this.descripcion_productos.splice(index, 1);
      });
  }

  edit(id) {
    this.router.navigate([`${this.environment.admin}/descripcion-productos/${this.producto_id}/editar/${id}`]);
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
    this.descripcion_producto_id = id;
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

}
