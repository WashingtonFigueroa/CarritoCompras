import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {InventarioService} from '../inventario.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inventario-index',
  templateUrl: './inventario-index.component.html',
  styleUrls: ['./inventario-index.component.css']
})
export class InventarioIndexComponent implements OnInit {
    inventarios: any = [];
    index: number = null;
    inventario_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected inventarioService: InventarioService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.inventarioService.index().subscribe((res: any) => {
            this.inventarios = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.inventarioService.buscar_inventarios({search: search})
            .subscribe((res: any) => {
                this.inventarios = res.data;
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
                    url: this.environment.base + 'inventarios?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.inventarioService.indexPerPage(url)
            .subscribe((res: any) => {
                this.inventarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.inventarioService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.inventarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.inventarioService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.inventarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.inventarioService.destroy(id)
            .subscribe(res => {
                this.inventarios.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate([this.environment.admin + '/inventarios/editar/' + id]);
    }

    // getDescripcionProductos(inventario_id) {
    //     this.router.navigate([this.environment.admin + '/descripcion-inventarios/' + inventario_id + '/listar']);
    // }

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
        this.inventario_id = id;
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
