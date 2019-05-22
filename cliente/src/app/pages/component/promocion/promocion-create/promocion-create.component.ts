import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../../../environments/environment.prod';
import {PromocionService} from '../promocion.service';
import {ToastrService} from 'ngx-toastr';
import {InventarioService} from '../../inventario/inventario.service';

@Component({
  selector: 'app-promocion-create',
  templateUrl: './promocion-create.component.html',
  styleUrls: ['./promocion-create.component.css']
})
export class PromocionCreateComponent implements OnInit {
@ViewChild ('imagen') imagen;
    inventarios: any = null;
    promocionGroup: FormGroup;

    constructor(protected promocionService: PromocionService,
                protected inventarioService: InventarioService,
                protected fb: FormBuilder,
                protected router: Router,
                protected toastr: ToastrService) {
        this.inventarioService.lista_inventarios().subscribe(res => this.inventarios = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.promocionGroup = this.fb.group({
            'inventario_id' : new FormControl(0, [Validators.required]),
            'detalle' : new FormControl('', [Validators.required]),
            'puntos' : new FormControl(1, [Validators.required]),
            'stock' : new FormControl(1, [Validators.required]),
            'imagen' : new FormControl(''),
            'estado' : new FormControl(1)
        });
    }

    store() {
        const form =  new FormData();
        const file = this.imagen.nativeElement;
        if (file.files[0]) {
            form.append('imagen', file.files[0]);
            form.append('inventario_id', this.promocionGroup.value.inventario_id);
            form.append('detalle', this.promocionGroup.value.detalle);
            form.append('puntos', this.promocionGroup.value.puntos);
            form.append('stock', this.promocionGroup.value.stock);
            form.append('estado', this.promocionGroup.value.estado);
            this.promocionService.store(form).subscribe((res: any) => {
                this.toastr.success(res.message, res.title, {
                    timeOut: 1000
                });
                this.router.navigate([environment.admin + '/promociones']);
            }, (error: any) => {
                this.toastr.error(error.message, error.title);
            }, () => {
                console.log('completed subscription! :D');
            });
        }else {
            this.toastr.info('Seleccione Imagen')
        }

    }

}
