import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductoService} from '../../producto/producto.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment.prod';
import {InventarioService} from '../inventario.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-inventario-create',
  templateUrl: './inventario-create.component.html',
  styleUrls: ['./inventario-create.component.css']
})
export class InventarioCreateComponent implements OnInit {

    productos: any = null;
    inventarioGroup: FormGroup;

    constructor(protected inventarioService: InventarioService,
                protected productoService: ProductoService,
                protected fb: FormBuilder,
                protected router: Router,
                protected toartr: ToastrService
    ) {
        this.productoService.lista_productos().subscribe(res => this.productos = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.inventarioGroup = this.fb.group({
            'producto_id' : new FormControl(0, [Validators.required]),
            'talla' : new FormControl('', [Validators.required]),
            'stock' : new FormControl('', [Validators.required]),
            'precio' : new FormControl(''),
            'puntos' : new FormControl('')
        });
    }

    store() {
        this.inventarioService.store(this.inventarioGroup.value)
            .subscribe((res: any) => {
                if (res.error) {
                    console.log(res.error);
                } else {
                    this.router.navigate([environment.admin + '/inventarios']);
                    this.toartr.success('Usuario Guardado', 'Ok');
                }
            }, error => {
                    this.toartr.error('Usuaurio Registrado', 'Error Usuario');
            });
    }

}
