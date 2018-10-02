import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {CamisaService} from '../camisa.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-camisa-index',
  templateUrl: './camisa-index.component.html',
  styleUrls: ['./camisa-index.component.css']
})
export class CamisaIndexComponent implements OnInit {
    camisas: any = [];
    index: number = null;
    camisa_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected camisaService: CamisaService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.camisaService.index().subscribe((res: any) => {
            this.camisas = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.camisaService.buscar_camisas({search: search})
            .subscribe((res: any) => {
                this.camisas = res.data;
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
                    url: this.environment.base + 'camisas?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.camisaService.indexPerPage(url)
            .subscribe((res: any) => {
                this.camisas = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.camisaService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.camisas = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.camisaService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.camisas = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.camisaService.destroy(id)
            .subscribe(res => {
                this.camisas.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate([this.environment.admin + '/camisas/editar/' + id]);
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
        this.camisa_id = id;
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
