import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {TipousuarioService} from '../tipousuario.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipousuario-index',
  templateUrl: './tipousuario-index.component.html',
  styleUrls: ['./tipousuario-index.component.css']
})
export class TipousuarioIndexComponent implements OnInit {
    tipousuarios: any = [];
    index: number = null;
    tipo_usuario_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected tipousuarioService: TipousuarioService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.tipousuarioService.index().subscribe((res: any) => {
            this.tipousuarios = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.tipousuarioService.buscar_tipousuarios({search: search})
            .subscribe((res: any) => {
                this.tipousuarios = res.data;
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
                    url: this.environment.base + 'tipo_usuarios?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.tipousuarioService.indexPerPage(url)
            .subscribe((res: any) => {
                this.tipousuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.tipousuarioService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.tipousuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.tipousuarioService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.tipousuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.tipousuarioService.destroy(id)
            .subscribe(res => {
                this.tipousuarios.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate(['acceso/component/tipousuarios/editar/' + id]);
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
        this.tipo_usuario_id = id;
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
