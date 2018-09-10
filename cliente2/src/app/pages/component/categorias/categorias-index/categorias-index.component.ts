import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment.prod";
import {TipousuarioService} from "../../tipousuario/tipousuario.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {CategoriasService} from "../categorias.service";

@Component({
  selector: 'app-categorias-index',
  templateUrl: './categorias-index.component.html',
  styleUrls: ['./categorias-index.component.css']
})
export class CategoriasIndexComponent implements OnInit {
    categorias: any = [];
    index: number = null;
    categoria_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected categoriaService: CategoriasService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.categoriaService.index().subscribe((res: any) => {
            this.categorias = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.categoriaService.buscar_categorias({search: search})
            .subscribe((res: any) => {
                this.categorias = res.data;
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
                    url: this.environment.base + 'categorias?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.categoriaService.indexPerPage(url)
            .subscribe((res: any) => {
                this.categorias = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.categoriaService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.categorias = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.categoriaService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.categorias = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.categoriaService.destroy(id)
            .subscribe(res => {
                this.categorias.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate(['/categorias/editar/' + id]);
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
}
