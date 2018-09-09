import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment.prod';
import {UsuarioService} from '../usuario.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuario-index',
  templateUrl: './usuario-index.component.html',
  styleUrls: ['./usuario-index.component.css']
})
export class UsuarioIndexComponent implements OnInit {
    usuarios: any = [];
    usuariosBK: any = [];
    index: number = null;
    usuario_id: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected usuarioService: UsuarioService,
                protected modalService: NgbModal,
                protected router: Router) { }

    ngOnInit() {
        this.usuarioService.index().subscribe((res: any) => {
            this.usuarios = res.data;
            this.usuariosBK = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    getPages(last_page) {
        for (let i = 1; i <= last_page; i++ ) {
            this.pages.push(
                {
                    url: this.environment.base + 'usuarios?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.usuarioService.indexPerPage(url)
            .subscribe((res: any) => {
                this.usuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.usuarioService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.usuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.usuarioService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.usuarios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.usuarioService.destroy(id).subscribe(res => {
            this.usuarios.splice(index, 1);
        });
    }

    edit(id) {
        this.router.navigate(['/usuarios/editar/' + id]);
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

    confirm(index, id, confirmModal){
        this.index = index;
        this.usuario_id = id;
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
