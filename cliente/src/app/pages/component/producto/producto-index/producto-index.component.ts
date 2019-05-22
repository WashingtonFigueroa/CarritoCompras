import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ProductoService} from '../producto.service';

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {
    productos: any = [];
    index: number = null;
    producto_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected productoService: ProductoService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.productoService.index().subscribe((res: any) => {
            this.productos = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.productoService.buscar_productos({search: search})
            .subscribe((res: any) => {
                this.productos = res.data;
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
                    url: this.environment.base + 'productos?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.productoService.indexPerPage(url)
            .subscribe((res: any) => {
                this.productos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.productoService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.productos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.productoService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.productos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.productoService.destroy(id)
            .subscribe(res => {
                this.productos.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate([this.environment.admin + '/productos/editar/' + id]);
    }

    getDescripcionProductos(producto_id) {
      this.router.navigate([this.environment.admin + '/descripcion-productos/' + producto_id + '/listar']);
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
        this.producto_id = id;
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
