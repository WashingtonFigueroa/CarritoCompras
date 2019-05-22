import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PromocionService} from '../promocion.service';

@Component({
  selector: 'app-promocion-index',
  templateUrl: './promocion-index.component.html',
  styleUrls: ['./promocion-index.component.css']
})
export class PromocionIndexComponent implements OnInit {
    promociones: any = [];
    index: number = null;
    promocion_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected promocionService: PromocionService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.promocionService.index().subscribe((res: any) => {
            this.promociones = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.promocionService.buscar_promociones({search: search})
            .subscribe((res: any) => {
                this.promociones = res.data;
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
                    url: this.environment.base + 'promociones?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.promocionService.indexPerPage(url)
            .subscribe((res: any) => {
                this.promociones = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.promocionService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.promociones = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.promocionService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.promociones = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.promocionService.destroy(id)
            .subscribe(res => {
                this.promociones.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate([this.environment.admin + '/promociones/editar/' + id]);
    }

    // getDescripcionProductos(promocion_id) {
    //     this.router.navigate([this.environment.admin + '/descripcion-promociones/' + promocion_id + '/listar']);
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
        this.promocion_id = id;
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
