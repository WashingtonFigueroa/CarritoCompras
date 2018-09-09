import { Component, OnInit } from '@angular/core';
import {TipousuarioService} from '../../tipousuario/tipousuario.service';
import {PrivilegioService} from '../privilegio.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-privilegio-index',
  templateUrl: './privilegio-index.component.html',
  styleUrls: ['./privilegio-index.component.css']
})
export class PrivilegioIndexComponent implements OnInit {
    idtipo = 0;
    privilegio = {
        tipousuarios: true,
        usuarios: true,
        privilegios: true,
        materiales: true,
        inventarios: true,
        movimientos: true,
        estadisticas: true,
        parametros: true,
        clientes: true,
        medidores: true,
        servicios: true,
        multas: true,
        lecturas: true,
        facturas: true
    };
    tipo_usuarios: any = null;
    constructor(protected tipoUsuarioService: TipousuarioService,
               // protected loginService: LoginService,
                protected privilegioService: PrivilegioService,
               // protected toastr: ToastrService,
                protected router: Router) {
        this.tipoUsuarioService.listaCargos().subscribe(res => this.tipo_usuarios = res);
    }

    ngOnInit() {
    }

    loadPrivilegios(idtipo) {
        this.tipoUsuarioService.listaPrivilegios(idtipo)
            .subscribe((privilegios: any) => {
                const lista = privilegios;
                lista.map(privilegio => {
                    switch (privilegio.ruta) {
                        case 'tipousuarios': this.privilegio.tipousuarios = privilegio.estado; break;
                        case 'usuarios': this.privilegio.usuarios = privilegio.estado; break;
                        case 'privilegios': this.privilegio.privilegios = privilegio.estado; break;
                        case 'materiales': this.privilegio.materiales = privilegio.estado; break;
                        case 'inventarios': this.privilegio.inventarios = privilegio.estado; break;
                        case 'movimientos': this.privilegio.movimientos = privilegio.estado; break;
                        case 'estadisticas': this.privilegio.estadisticas = privilegio.estado; break;
                        case 'parametros': this.privilegio.parametros = privilegio.estado; break;
                        case 'clientes': this.privilegio.clientes = privilegio.estado; break;
                        case 'medidores': this.privilegio.medidores = privilegio.estado; break;
                        case 'servicios': this.privilegio.servicios = privilegio.estado; break;
                        case 'multas': this.privilegio.multas = privilegio.estado; break;
                        case 'lecturas': this.privilegio.lecturas = privilegio.estado; break;
                        case 'facturas': this.privilegio.facturas = privilegio.estado; break;
                    }
                });
            });
    }
    update() {

        if (this.idtipo === 0){
            // this.toastr.info('Seleccione el usuario', 'Error de Privilegios');
        }else{
            this.privilegioService.update(this.idtipo, this.privilegio)
                .subscribe(res => {
                    this.router.navigate(['acceso/component/medidores']);
                  //  this.toastr.success('Privilegios Guardados', 'Ok');
                });
        }
    }
}
