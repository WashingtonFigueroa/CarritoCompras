import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {ArticulosService} from '../articulos.service';

@Component({
  selector: 'app-articulos-index',
  templateUrl: './articulos-index.component.html',
  styleUrls: ['./articulos-index.component.css']
})
export class ArticulosIndexComponent implements OnInit {
    articulos: any = [];
    index: number = null;
    imagen_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected articuloService: ArticulosService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.articuloService.index().subscribe((res: any) => {
            this.articulos = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.articuloService.buscar_articulos({search: search})
            .subscribe((res: any) => {
                this.articulos = res.data;
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
                    url: this.environment.base + 'articulos?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.articuloService.indexPerPage(url)
            .subscribe((res: any) => {
                this.articulos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.articuloService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.articulos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.articuloService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.articulos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.articuloService.destroy(id)
            .subscribe(res => {
                this.articulos.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate([this.environment.admin + '/articulos/editar/' + id]);
    }

    // getDescripcionProductos(imagen_id) {
    //     this.router.navigate([this.environment.admin + '/descripcion-articulos/' + imagen_id + '/listar']);
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
        this.imagen_id = id;
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
