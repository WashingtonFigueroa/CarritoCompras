import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InventarioService} from "../inventario.service";
import {ProductoService} from "../../producto/producto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-inventario-edit',
  templateUrl: './inventario-edit.component.html',
  styleUrls: ['./inventario-edit.component.css']
})
export class InventarioEditComponent implements OnInit {
    productos: any = null;
    inventario: any = null;
    inventario_id: number = null;
    inventarioGroup: FormGroup;

    constructor(protected inventarioService: InventarioService,
                protected productoService: ProductoService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.productoService.lista_productos().subscribe(res => this.productos = res);
        this.route.params.subscribe(param => {
            this.inventario_id = param.id;
            this.inventarioService.show(param.id)
                .subscribe(res => {
                    this.inventario = res;
                    console.log(res);
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(inventario) {
        this.inventarioGroup = this.fb.group({
            'producto_id': new FormControl(inventario.producto_id, [Validators.required]),
            'talla': new FormControl(inventario.talla, [Validators.required]),
            'stock': new FormControl(inventario.stock, [Validators.required]),
            'precio': new FormControl(inventario.precio),
            'puntos': new FormControl(inventario.puntos)
        });
    }

    update() {
        this.inventarioService.update(this.inventarioGroup.value, this.inventario_id)
            .subscribe(res => {
                this.router.navigate(['admin/inventarios/listar']);
                this.toastr.success('Inventario Actulizado', 'OK');
            });
    }
}