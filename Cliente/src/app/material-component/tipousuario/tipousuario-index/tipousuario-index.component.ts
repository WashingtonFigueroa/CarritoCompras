// import { Component, OnInit } from '@angular/core';
// import {environment} from "../../../../environments/environment.prod";
// import {TipousuarioService} from "../tipousuario.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-tipousuario-index',
//   templateUrl: './tipousuario-index.component.html',
//   styleUrls: ['./tipousuario-index.component.css']
// })
// export class TipousuarioIndexComponent implements OnInit {
//     tipoUsuarios: any = [];
//     tipoUsuariosBK: any = [];
//
//     index: number = null;
//     idtipo: number = null;
//     closeResult: string;
//     search = '';
//
//     pages: any = [];
//     prev_page: any = null;
//     next_page: any = null;
//     environment = environment;
//
//     constructor(protected tipousuarioService: TipousuarioService,
//                 protected modalService: NgbModal,
//                 protected router: Router) {}
//
//     ngOnInit() {
//         this.tipousuarioService.index().subscribe((res: any) => {
//             this.tipoUsuarios = res.data;
//             this.tipoUsuariosBK = res.data;
//             this.getPages(res.last_page);
//             this.prev_page = res.prev_page_url;
//             this.next_page = res.next_page_url;
//         });
//     }
//
//     getPages(last_page) {
//         for (let i = 1; i <= last_page; i++ ) {
//             this.pages.push(
//                 {
//                     url: this.environment.base + 'tipousuarios?page=' + i ,
//                     item: i
//                 }
//             );
//         }
//     }
//     loadPagination(url) {
//         this.tipousuarioService.indexPerPage(url)
//             .subscribe((res: any) => {
//                 this.tipoUsuarios = res.data;
//                 this.prev_page = res.prev_page_url;
//                 this.next_page = res.next_page_url;
//             });
//     }
//     prevPage() {
//         this.tipousuarioService.indexPerPage(this.prev_page)
//             .subscribe( (res: any) => {
//                 this.tipoUsuarios = res.data;
//                 this.prev_page = res.prev_page_url;
//                 this.next_page = res.next_page_url;
//             });
//     }
//     nextPage() {
//         this.tipousuarioService.indexPerPage(this.next_page)
//             .subscribe( (res: any) => {
//                 this.tipoUsuarios = res.data;
//                 this.prev_page = res.prev_page_url;
//                 this.next_page = res.next_page_url;
//             });
//     }
//
//     buscar(search) {
//         this.tipoUsuarios = this.tipoUsuariosBK.filter((tipo: any) => {
//             return tipo.nombre.toLowerCase().indexOf(search) > -1;
//         });
//     }
//
//     destroy(index, id) {
//         this.tipousuarioService.destroy(id)
//             .subscribe(res => {
//                 this.tipoUsuarios.splice(index, 1);
//             });
//     }
//
//     edit(id) {
//         this.router.navigate(['acceso/component/tipousuarios/editar/' + id]);
//     }
//
//     private getDismissReason(reason: any): string {
//         if (reason === ModalDismissReasons.ESC) {
//             return 'by pressing ESC';
//         } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//             return 'by clicking on a backdrop';
//         } else {
//             return `with: ${reason}`;
//         }
//     }
//
//     confirm(index, id, confirmModal) {
//         this.index = index;
//         this.idtipo = id;
//         this.modalService.open(confirmModal).result.then((result) => {
//             if (result === 'si') {
//                 this.destroy(index, id);
//             } else {
//                 console.log(result);
//             }
//             this.closeResult = `Closed with: ${result}`;
//         }, (reason) => {
//             console.log('cancel');
//             this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//         });
//     }
// }