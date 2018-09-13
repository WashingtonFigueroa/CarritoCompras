import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductoService} from "../../producto/producto.service";
import {CategoriasService} from "../../categorias/categorias.service";
import {Router} from "@angular/router";
import {environment} from "../../../../../environments/environment.prod";
import {PromocionService} from "../promocion.service";

@Component({
  selector: 'app-promocion-create',
  templateUrl: './promocion-create.component.html',
  styleUrls: ['./promocion-create.component.css']
})
export class PromocionCreateComponent implements OnInit {

    productos: any = null;
    promocionGroup: FormGroup;

    constructor(protected promocionService: PromocionService,
                protected productoService: ProductoService,
                protected fb: FormBuilder,
                protected router: Router,
                //            protected toartr: ToastrService
    ) {
        this.productoService.lista_productos().subscribe(res => this.productos = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.promocionGroup = this.fb.group({
            'producto_id' : new FormControl(0, [Validators.required]),
            'detalle' : new FormControl('', [Validators.required]),
            'puntos' : new FormControl(1, [Validators.required]),
            'stock' : new FormControl(1, [Validators.required]),
            'estado' : new FormControl(1)

        });
    }

    store() {
        this.promocionService.store(this.promocionGroup.value)
            .subscribe((res: any) => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    this.router.navigate([environment.admin + '/promociones']);
                    // this.toartr.success('Usuario Guardado', 'Ok');
                }
            }, error => {
                // this.toartr.error('Usuaurio Registrado', 'Error Usuario');
            });
    }

}
